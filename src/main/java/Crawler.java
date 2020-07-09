import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashSet;
import java.util.Properties;

public class Crawler {

    private static int MAX_DEPTH;
    private static int PAGE_LIMIT;
    static {
        // load params from settings file
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
    private HashSet<String> links;

    public Crawler() {
        links = new HashSet<>();
    }

    public void crawl (String url) {
        crawl(url, 0);
        System.out.println("Link set size: " + links.size());
    }

    private void crawl (String url, int depth){
        if ((!links.contains(url) && (depth < MAX_DEPTH) && (links.size() < PAGE_LIMIT))) {
            // print scanned link
            for(int i=0; i <= depth; i++) {
                System.out.print(">");
            }
            System.out.println("URL: " + url);
            try {
                links.add(url);
                // fetch the HTML doc
                Document document = Jsoup.connect(url).get();
                // parse the HTML to extract links
                Elements linksOnPage = document.select("a[href]");
                // crawl thru all extracted links
                for (Element page : linksOnPage) {
                    crawl(page.attr("abs:href"), depth + 1);
                }
            } catch (IOException e) {
                System.err.println("Failed to load `" + url + "`: " + e.getMessage());
            }
        }
    }

}
