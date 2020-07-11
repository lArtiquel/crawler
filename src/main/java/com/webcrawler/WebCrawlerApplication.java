package com.webcrawler;

import java.util.ArrayList;
import java.util.Arrays;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class WebCrawlerApplication {
    public static void main(String[] args) {
        SpringApplication.run(WebCrawlerApplication.class, args);
//        WebCrawler webCrawler = new WebCrawler();
//        webCrawler.setTerms(
//                new ArrayList<String>(
//                        Arrays.asList("React", "Redux", "Firebase")
//                )
//        );
//        webCrawler.crawl("https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial");
    }
}
