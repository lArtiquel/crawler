package com.webcrawler.models;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

/**
 * The {@code CrawlRequestModel} class represents {@code WebCrawlerController#crawlUrl}'s request model from the client.
 * {@code CrawlRequestModel} class has one constructor with all arguments.
 */
@AllArgsConstructor
public class CrawlRequestModel {

    /** First url to start crawling. */
    @Getter
    private String url;

    /** Max number of pages to crawl. */
    @Getter
    private int limit;

    /** Max link depth crawler allowed to go deep with his process. */
    @Getter
    private int depth;

    /** Array of terms to look for on the page. */
    @Getter
    private List<String> terms;

}
