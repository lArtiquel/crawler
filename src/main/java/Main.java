import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        WebCrawler webCrawler = new WebCrawler();
        webCrawler.setTerms(
                new ArrayList<String>(
                        Arrays.asList("React", "Redux", "Firebase")
                )
        );
        webCrawler.crawl("https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial");
    }
}
