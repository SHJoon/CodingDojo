package com.codingdojo.howardshin.world.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codingdojo.howardshin.world.services.ApiService;

@RestController
public class ApiController {
	
	@Autowired
	private ApiService api;
	
	@RequestMapping("/")
	public void ApiService() {
		List<Object[]> temp = api.region();
		for(Object[] row : temp) {
			String tempReg = (String) row[0];
			Long tempCount = (Long) row[1];
			System.out.println("Region " + tempReg);
			System.out.println("Count " + tempCount);
		}
		return;
	}
}
