package com.webcrawler.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class RootController {

    /**
     * Method returns HTML welcome page on "/" and "/welcome" routes.
     * @return HTML welcome page.
     */
    @GetMapping(value = {"/", "/welcome"}, produces = MediaType.TEXT_HTML_VALUE)
    @ResponseBody
    public String welcomeAsHTML() {
        return "<html>\n" +
                    "<head>" +
                        "<title>Web Crawler's backend</title>" +
                    "</head>\n" +
                    "<body>\n" +
                        "<h1 style=\"color:blue; text-align: center\">Welcome to the Web Crawler's backend!</h1>\n" +
                        "<p> Please, use our api for crawling. Refer the <a href=\"https://github.com/lArtiquel/crawler\">documentation</a>. Thanks!" +
                    "</body>\n" +
                "</html>";
    }

}
