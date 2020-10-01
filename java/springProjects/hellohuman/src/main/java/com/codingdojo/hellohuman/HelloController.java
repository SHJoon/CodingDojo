package com.codingdojo.hellohuman;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	
	@RequestMapping("/")
	public String index(@RequestParam(value="name", required=false) String firstQuery, @RequestParam(value="last_name", required=false) String lastQuery) {
		if (firstQuery == null) {
			firstQuery = "Human";
		}
		if (lastQuery == null) {
			lastQuery = "";
		}
		return String.format("Hello %s %s! \n Welcome to SpringBoot!", firstQuery, lastQuery);
	}
}
