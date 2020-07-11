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
    private static int MAX_DEPTH;
    private static int PAGE_LIMIT;
    static {
        // init static vars
        try(InputStream resourceAsStream = Crawler.class.getResourceAsStream("/settings.properties")) {
            final Properties properties = new Properties();
            properties.load(resourceAsStream);
            MAX_DEPTH = Integer.parseInt(properties.getProperty("crawl_depth"));
            PAGE_LIMIT = Integer.parseInt(properties.getProperty("crawl_limit"));
        } catch (IOException e) {
            System.out.println(e.getMessage());
        } catch (NumberFormatException e) {
            System.out.println(e.getMessage());
            MAX_DEPTH = 8;
            PAGE_LIMIT = 10000;
        }
    }

    /**
     * List of page infos.
     * {@code WebCrawler#crawl} method returns that list.
     * @see PageInfoModel class for more.
     */
    @Getter
    private List<PageInfoModel> pageInfos;

    /**
     * List terms to search on each page.
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
        System.out.println(pageInfos.get(0).getTermEntriesMap());
        return pageInfos;
    }

    /**
     * Private method for recursion crawling.
     * @param url   URL to start crawling from.
     * @param depth Depth from current url to initial url.
     */
    private void crawl (final String url, final int depth) {
        if ((!isUrlAlreadyCrawled(url) && (depth < MAX_DEPTH) && (pageInfos.size() < PAGE_LIMIT))) {

            // print scanned link info
            for(int i=0; i <= depth; i++) {
                System.out.print(">");
            }
            System.out.println("URL: " + url);

            // add current url to Set to avoid url parsing duplication
            final PageInfoModel pageInfo = new PageInfoModel(url);

            try{
                // fetch the HTML doc
                Document document = Jsoup.connect(url).get();

                // loop thru all terms
                for(String term: terms){
                    // find all term entries in all html tags
                    int numberOfTermEntries = document.select("*:contains(" + term + ")").size();
                    // push that info into specified pageInfo struct
                    pageInfo.getTermEntriesMap().put(term, numberOfTermEntries);
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
                // for now just ignore dead links
                System.out.println(e.getMessage());
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
