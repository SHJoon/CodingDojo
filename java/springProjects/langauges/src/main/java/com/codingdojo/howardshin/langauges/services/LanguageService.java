package com.codingdojo.howardshin.langauges.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.howardshin.langauges.models.Language;
import com.codingdojo.howardshin.langauges.repositories.LanguageRepository;

@Service
public class LanguageService {
	private final LanguageRepository languageRepository;
	
	public LanguageService(LanguageRepository languageRepository) {
		this.languageRepository = languageRepository;
	}
	
	public List<Language> allLanguages() {
		return languageRepository.findAll();
	}
	
	public Language createLanguage(Language l) {
		return languageRepository.save(l);
	}
	
	public Language findLanguage(Long id) {
		Optional<Language> optionalLang = languageRepository.findById(id);
		if(optionalLang.isPresent()) {
			return optionalLang.get();
		} else {
			return null;
		}
	}
	
	public Language updateLanguage(Long id, String name, String creator, String version) {
		Language l = this.findLanguage(id);
		l.setCreator(creator);
		l.setName(name);
		l.setVersion(version);
		return languageRepository.save(l);
	}
	
	public Language updateLanguage(Language l) {
		return languageRepository.save(l);
	}
	
	public void deleteLanguage(Long id) {
		languageRepository.deleteById(id);
	}
}
