package com.codingdojo.counter;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CounterController {
	private int count = 0;
	
	public int getCount() {
		return count;
	}
	
	public void setCount(int count) {
		this.count = count;
	}
	
	@RequestMapping("/")
	public String index(HttpSession session) {
		int currCount = getCount();
		currCount++;
		setCount(currCount);
		session.setAttribute("count", currCount);
		return "index.jsp"; 
	}
	
	@RequestMapping("/counter")
	public String counter(HttpSession session, Model model) {
		Integer counts = (Integer) session.getAttribute("count");
		if (counts == null) {
			counts = 0;
		}
		model.addAttribute("count", counts);
		return "counter.jsp";
	}
	
	@RequestMapping("/double")
	public String doubleCount(HttpSession session) {
		int currCount = getCount();
		currCount += 2;
		setCount(currCount);
		session.setAttribute("count", currCount);
		return "double.jsp"; 
	}

}
