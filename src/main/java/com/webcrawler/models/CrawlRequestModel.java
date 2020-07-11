package com.webcrawler.models;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
public class CrawlRequestModel {

    @Getter
    private String url;
    @Getter
    private List<String> terms;

}
