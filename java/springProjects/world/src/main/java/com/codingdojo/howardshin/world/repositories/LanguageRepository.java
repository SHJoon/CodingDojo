package com.codingdojo.howardshin.world.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.howardshin.world.models.Language;

@Repository
public interface LanguageRepository extends CrudRepository<Language, Long>{
	
}
