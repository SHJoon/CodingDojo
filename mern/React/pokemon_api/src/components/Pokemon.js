import React, { useEffect, useState } from 'react';

const Pokemon = (props) => {
    const [ pokemons, setPokemons ] = useState([]);

    const handleClick = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => response.json())
        .then(response => setPokemons(response.results))
    };

    return(
        <div>
            <button onClick={handleClick} >Fetch Pokemons</button>
            {pokemons.map((poke, i) => {
                return(
                    <p>{poke.name}</p>
                )
            })}
        </div>
    )
}

export default Pokemon;