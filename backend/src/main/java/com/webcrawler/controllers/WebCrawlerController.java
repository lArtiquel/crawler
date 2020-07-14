package com.webcrawler.controllers;

import com.webcrawler.crawler.Crawler;
import com.webcrawler.models.CrawlRequestModel;
import com.webcrawler.models.PageInfoModel;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * The {@code WebCrawlerController} class represents Rest Controller mapping class to all '/api/*' routes.
 * Every method at this class adds CORS headers to the responses so everyone could use our api.
 */
@CrossOrigin(origins={"*"})
@RequestMapping("/api")
@RestController()
public class WebCrawlerController {

    /**
     * Method is the REST Controller's mapping on '/crawlUrl'.
     * It starts the {@code Crawler} with provided parameters.
     * and returns crawling results.
     * @param req Json object provided by client with crawling settings.
     * @return List of results of crawling.
     */
    @PostMapping("/crawlUrl")
    List<PageInfoModel> crawlUrl(@RequestBody CrawlRequestModel req){
        Crawler crawler = new Crawler();
        crawler.setPageLimit(req.getLimit());
        crawler.setMaxDepth(req.getDepth());
        crawler.setTerms(req.getTerms());
        return crawler.crawl(req.getUrl());
    }

}
