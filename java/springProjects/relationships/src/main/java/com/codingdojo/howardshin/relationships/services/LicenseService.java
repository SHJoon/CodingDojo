package com.codingdojo.howardshin.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.howardshin.relationships.models.License;
import com.codingdojo.howardshin.relationships.repositories.LicenseRepository;

@Service
public class LicenseService {
	private final LicenseRepository licenseRepository;
	
	public LicenseService(LicenseRepository licenseRepository) {
		this.licenseRepository = licenseRepository;
	}
	
	public List<License> allLicenses() {
		return licenseRepository.findAll();
	}
	
	public License createLicense(License l) {
		Long personId = l.getPerson().getId();
		int idLength = String.valueOf(personId).length();
		int numOfZeros = 6 - idLength;
		String licenseNumber = "";
		
		for (int i = 0; i < numOfZeros; i++) {
			licenseNumber += "0";
		}
		licenseNumber += String.valueOf(personId);
		l.setNumber(licenseNumber);
		return licenseRepository.save(l);
	}
	
	public License findLicense(Long id) {
		Optional<License> optionalLicense = licenseRepository.findById(id);
		if(optionalLicense.isPresent()) {
			return optionalLicense.get();
		}
		else {
			return null;
		}
	}
}
