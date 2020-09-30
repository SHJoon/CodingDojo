package com.howardshin.pokemon;
import java.util.ArrayList;

public class Pokedex extends AbstractPokemon {

	@Override
	public void listPokemon() {
		// TODO Auto-generated method stub
		ArrayList<Pokemon> myPokemons = getMyPokemons();
		for (Pokemon pokemon: myPokemons) {
			System.out.println(pokemon.getName());
		}
	}

}
