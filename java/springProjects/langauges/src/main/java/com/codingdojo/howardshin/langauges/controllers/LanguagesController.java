package com.codingdojo.howardshin.langauges.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.codingdojo.howardshin.langauges.models.Language;
import com.codingdojo.howardshin.langauges.services.LanguageService;

@Controller
public class LanguagesController {
	private final LanguageService languageService;
	
	public LanguagesController(LanguageService languageService) {
		this.languageService = languageService;
	}
	
	@RequestMapping("/languages")
	public String index(Model model, @ModelAttribute("language") Language language) {
		List<Language> langs = languageService.allLanguages();
		model.addAttribute("languages", langs);
		return "/languages/index.jsp";
	}
	
	@RequestMapping("/languages/new")
	public String newLanguage(@ModelAttribute("language") Language lang) {
		return "/languages/new.jsp";
	}
	
	@RequestMapping(value="/languages", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("language") Language lang, BindingResult result) {
		if (result.hasErrors()) {
			return "/languages/new.jsp";
		} else {
			languageService.createLanguage(lang);
			return "redirect:/languages";
		}
	}
	
	@RequestMapping("/languages/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		Language lang = languageService.findLanguage(id);
		model.addAttribute("language", lang);
		return "/languages/language.jsp";
	}
	
	@RequestMapping("/languages/edit/{id}")
	public String edit(@PathVariable("id") Long id, Model model) {
		Language lang = languageService.findLanguage(id);
		model.addAttribute("language", lang);
		return "/languages/edit.jsp";
	}
	
	@RequestMapping(value="/languages/{id}", method=RequestMethod.PUT)
	public String update(@Valid @ModelAttribute("language") Language lang, BindingResult result) {
		if (result.hasErrors()) {
			return "/languages/edit.jsp";
		} else {
			languageService.updateLanguage(lang);
			return "redirect:/languages";
		}
	}
	
	@RequestMapping(value="/languages/{id}", method=RequestMethod.DELETE)
	public String destroy(@PathVariable("id") Long id) {
		languageService.deleteLanguage(id);
		return "redirect:/languages";
	}
}
