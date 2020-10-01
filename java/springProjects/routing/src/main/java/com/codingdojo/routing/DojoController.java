package com.codingdojo.routing;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DojoController {
	
	@RequestMapping("/{dojo}")
	public String dojo(@PathVariable("dojo") String dojoPath) {
		if (dojoPath.equals("dojo")) {
			return "The dojo is awesome!";
		}
		else if (dojoPath.equals("burbank-dojo")) {
			return "Burbank Dojo is located in Southern California";
		}
		else if (dojoPath.equals("san-jose")) {
			return "SJ dojo is the headquarters";
		}
		return "";
	}
}
