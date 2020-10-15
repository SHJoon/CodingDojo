package com.codingdojo.howardshin.world.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.howardshin.world.models.City;

@Repository
public interface CityRepository extends CrudRepository<City, Long>{
	
}
