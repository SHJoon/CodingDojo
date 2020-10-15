package com.codingdojo.howardshin.world.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.codingdojo.howardshin.world.repositories.CityRepository;
import com.codingdojo.howardshin.world.repositories.CountryRepository;
import com.codingdojo.howardshin.world.repositories.LanguageRepository;

@Service
public class ApiService {
	private CountryRepository countryRepo;
	private CityRepository cityRepo;
	private LanguageRepository languageRepo;
	
	public ApiService(CountryRepository countryRepo, CityRepository cityRepo, LanguageRepository languageRepo) {
		this.countryRepo = countryRepo;
		this.cityRepo = cityRepo;
		this.languageRepo = languageRepo;
	}
	
	public List<Object[]> getCountryByLanguage(String language) {
		return countryRepo.findCountryByLang(language);
	}
}
