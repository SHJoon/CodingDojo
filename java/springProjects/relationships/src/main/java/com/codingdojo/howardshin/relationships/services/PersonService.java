package com.codingdojo.howardshin.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.howardshin.relationships.models.Person;
import com.codingdojo.howardshin.relationships.repositories.PersonRepository;

@Service
public class PersonService {
	private final PersonRepository personRepository;
	
	public PersonService(PersonRepository personRepository) {
		this.personRepository = personRepository;
	}
	
	public List<Person> allPersons() {
		return personRepository.findAll();
	}
	
	public Person createPerson(Person person) {
		return personRepository.save(person);
	}
	
	public Person findPerson(Long id) {
		Optional<Person> optionalPerson = personRepository.findById(id);
		if(optionalPerson.isPresent()) {
			return optionalPerson.get();
		}
		else {
			return null;
		}
	}
}
