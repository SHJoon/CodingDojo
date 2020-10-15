package com.codingdojo.howardshin.world.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.howardshin.world.models.Country;

@Repository
public interface CountryRepository extends CrudRepository<Country, Long>{
	List<Country> findAll();
	
//	1. What query would you run to get all the countries that speak Slovene?
//	Your query should return the name of the country, language, and language
//	percentage. Your query should arrange the result by language percentage in descending order.
	@Query("SELECT c.name, l.language, l.percentage FROM Country c JOIN c.languages l WHERE language = ?1 Order By percentage desc")
	List<Object[]> findCountryByLang(String lang);
	
//	2. What query would you run to display the total number of cities for each country?
//	Your query should return the name of the country and the total number of cities.
//	Your query should arrange the result by the number of cities in descending order.
	@Query(value="SELECT country.name, COUNT(city.name) FROM world.countries country JOIN world.cities city ON country.id = city.country_id group by country.name ORDER BY COUNT(city.name) desc", nativeQuery=true)
	List<Object[]> findNumCities();

//	3. What query would you run to get all the cities in Mexico with a population of
//	greater than 500,000? Your query should arrange the result by population in descending order.
	@Query("SELECT city.name FROM Country c JOIN c.cities")
	List<Object[]> findMexicoCities();

//	4. What query would you run to get all languages in each country with a percentage greater
//	than 89%? Your query should arrange the result by percentage in descending order.

//	5. What query would you run to get all the countries with Surface Area below 501
//	and Population greater than 100,000?

//	6. What query would you run to get countries with only Constitutional Monarchy with
//	a surface area of more than 200 and a life expectancy greater than 75 years?

//	7. What query would you run to get all the cities of Argentina inside the Buenos Aires
//	district and have the population greater than 500, 000? The query should return the
//	Country Name, City Name, District, and Population.

//	8. What query would you run to summarize the number of countries in each region?
//	The query should display the name of the region and the number of countries.
//	Also, the query should arrange the result by the number of countries in descending order.

}
