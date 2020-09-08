import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonAxios = (props) => {
    const [ pokemons, setPokemons ] = useState([]);

    const handleClick = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => setPokemons(response.data.results));
    };

    return(
        <div>
            <button onClick={handleClick} >Fetch Pokemons using axios</button>
            {pokemons.map((poke, i) => {
                return(
                    <p key={i}>{poke.name}</p>
                )
            })}
        </div>
    )
}

export default PokemonAxios;