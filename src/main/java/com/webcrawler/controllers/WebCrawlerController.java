package com.webcrawler.controllers;

import com.webcrawler.crawler.Crawler;
import com.webcrawler.models.CrawlRequestModel;
import com.webcrawler.models.PageInfoModel;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins={"*"}) // specify your origins
@RestController()
@RequestMapping("api/")
public class WebCrawlerController {

    @GetMapping("/crawl")
    List<PageInfoModel> crawl(@RequestBody CrawlRequestModel req){
        Crawler crawler = new Crawler();
        crawler.setTerms(req.getTerms());
        return crawler.crawl(req.getUrl());
    }

}
