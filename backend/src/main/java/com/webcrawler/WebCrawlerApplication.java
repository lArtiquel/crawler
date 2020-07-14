package com.webcrawler;

import java.util.ArrayList;
import java.util.Arrays;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * The {@code CrawlRequestModel} class is the main configuration class for Spring Boot application.
 */
@SpringBootApplication
public class WebCrawlerApplication {
    /** Main entry point of Spring Boot app */
    public static void main(String[] args) {
        SpringApplication.run(WebCrawlerApplication.class, args);
    }
}
