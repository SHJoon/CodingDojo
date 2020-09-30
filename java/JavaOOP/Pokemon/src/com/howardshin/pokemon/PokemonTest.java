package com.howardshin.pokemon;

public class PokemonTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Pokemon pika = new Pokemon("Pikachu", 100, "Electric");
		Pokemon squir = new Pokemon("Squirtle", 80, "Water");
		Pokemon charm = new Pokemon("Charmander", 100, "Fire");
		Pokemon bulb = new Pokemon("Bulbasaur", 120, "Grass");
		
		pika.attackPokemon(charm);
		squir.getName();
		
		Pokedex poke = new Pokedex();
		poke.createPokemon("Pikachu", 100, "Electric");
		poke.createPokemon("Squirtle", 80, "Water");
		poke.createPokemon("Charmander", 100, "Fire");
		poke.createPokemon("Bulbasaur", 120, "Grass");
		
		poke.listPokemon();
		
		System.out.println(poke.pokemonInfo(pika));
	}

}
