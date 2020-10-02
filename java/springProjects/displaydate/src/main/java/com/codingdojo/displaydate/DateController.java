package com.codingdojo.displaydate;

import java.util.Date;
import java.text.SimpleDateFormat;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DateController {
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping("/date")
	public String date(Model model) {
		Date date = new Date();

		model.addAttribute("currDate", String.format("%tA, the %<td of %<tB, %<tY", date));
		return "date.jsp";
	}
	
	@RequestMapping("/time")
	public String time(Model model) {
		Date date = new Date();
		
		model.addAttribute("currTime", String.format("%tI:%<tM %<Tp", date));
		return "time.jsp";
	}
	
}
