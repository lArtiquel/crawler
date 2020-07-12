package com.webcrawler.crawler;

import com.webcrawler.models.PageInfoModel;
import lombok.Getter;
import lombok.Setter;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.io.InputStream;
import java.util.*;

/**
 * The {@code WebCrawler} class crawls thru the pages collecting links and counting number of term entries.
 * Then it goes by collected links and does the very same procedure until
 */
public class Crawler {

    /** Initialize {@code WebCrawler#MAX_DEPTH} and {@code WebCrawler#PAGE_LIMIT}
     * with values specified in settings prop file
     * */
    @Getter @Setter
    private int pageLimit;
    @Getter @Setter
    private int maxDepth;
//    static {
//        // init static vars
//        try(InputStream resourceAsStream = Crawler.class.getResourceAsStream("/settings.properties")) {
//            final Properties properties = new Properties();
//            properties.load(resourceAsStream);
//            MAX_DEPTH = Integer.parseInt(properties.getProperty("crawl_depth"));
//            PAGE_LIMIT = Integer.parseInt(properties.getProperty("crawl_limit"));
//        } catch (IOException e) {
//            System.out.println(e.getMessage());
//        } catch (NumberFormatException e) {
//            System.out.println(e.getMessage());
//            MAX_DEPTH = 8;
//            PAGE_LIMIT = 10000;
//        }
//    }

    /**
     * List of page infos.
     * {@code WebCrawler#crawl} method returns that list.
     * @see PageInfoModel class for more.
     */
    @Getter
    private List<PageInfoModel> pageInfos;

    /**
     * List of terms to search on each page.
     */
    @Getter @Setter
    private List<String> terms;

    /**
     * Main entry point to start crawling the internet.
     * @param url URL to start crawling from.
     * @return List of pageInfos.
     */
    public List<PageInfoModel> crawl (String url) {
        resetState();
        crawl(url, 0);
        System.out.println("Link Set size: " + pageInfos.size());
        System.out.println(pageInfos.get(0).getTermsToEntries());
        return pageInfos;
    }

    /**
     * Private method for recursion crawling.
     * @param url   URL to start crawling from.
     * @param depth Depth from current url to initial url.
     */
    private void crawl (final String url, final int depth) {
        if ((!isUrlAlreadyCrawled(url) && (depth < maxDepth) && (pageInfos.size() < pageLimit))) {

            // print scanned link info
            for(int i=0; i <= depth; i++) {
                System.out.print(">");
            }
            System.out.println("URL: " + url);

            try {
                // connect and fetch the HTML doc
                Document document = Jsoup.connect(url).get();

                // create PageInfo model for valid link
                final PageInfoModel pageInfo = new PageInfoModel(url, false);

                // loop thru all terms
                for(String term: terms){
                    // find all term entries in all html tags
                    int numberOfTermEntries = document.select("*:contains(" + term + ")").size();
                    // push that info into specified pageInfo struct
                    pageInfo.getTermsToEntries().put(term, numberOfTermEntries);
                }

                // push page info to the list of page infos
                pageInfos.add(pageInfo);

                // parse the HTML to extract links on that html page
                Elements linksOnPage = document.select("a[href]");

                // crawl thru all extracted links
                for (Element page : linksOnPage) {
                    crawl(page.attr("abs:href"), depth + 1);
                }
            } catch (IOException e) {
                System.out.println(e.getMessage());
                // save link into map, but mark that it is bad
                final PageInfoModel pageInfo = new PageInfoModel(url, true);
                pageInfos.add(pageInfo);
            }
        }
    }

    /**
     * Checks if such url already had been crawled or in the queue to be crawled.
     * @param url
     * @return True if such url crawled, else - false.
     */
    private boolean isUrlAlreadyCrawled(final String url) {
        for (PageInfoModel pageInfo: pageInfos) {
            if(pageInfo.getUrl().equals(url)) return true;
        }
        return false;
    }

    /**
     * Meant to be invoked before new crawling to reset results of prev crawling procedure.
     */
    private void resetState(){
        pageInfos = new LinkedList<>();
    }

}
