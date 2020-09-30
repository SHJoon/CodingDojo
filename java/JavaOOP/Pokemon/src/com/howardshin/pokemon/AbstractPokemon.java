package com.howardshin.pokemon;
import java.util.ArrayList;

public abstract class AbstractPokemon implements PokemonInterface {
	private ArrayList<Pokemon> myPokemons = new ArrayList<Pokemon>();
	
	public ArrayList<Pokemon> getMyPokemons() {
		return myPokemons;
	}
	
	@Override
	public Pokemon createPokemon(String name, int health, String type) {
		// TODO Auto-generated method stub
		Pokemon poke = new Pokemon(name, health, type);
		myPokemons.add(poke);
		return poke;
	}

	@Override
	public String pokemonInfo(Pokemon pokemon) {
		// TODO Auto-generated method stub
		return String.format("Name: %s - Type: %s - Health: %s", pokemon.getName(),  pokemon.getType(), pokemon.getHealth());
	}
}
