import React, { useState } from 'react';
import axios from 'axios';

import { navigate } from '@reach/router';

const Search = (props) => {
    // const {setData, isSubmitted, setIsSubmitted} = props;

    const {setDisplay, setHomeworld, setName} = props;

    const searchOptions = [
        "people",
        "planets",
        "films"
    ]
    const [ selectedSearch, setSelectedSearch ] = useState("people");
    const [ searchIdx, setSearchIdx ] = useState();

    const fetchAPI = (e) => {
        e.preventDefault();
        return(
            axios.get(`https://swapi.dev/api/${selectedSearch}/${searchIdx}`)
            .then(response =>{
                if (selectedSearch==="people"){
                    setName(response.data.name);
                    const copiedResponse = {
                        Height: response.data.height,
                        Gender: response.data.gender,
                        mass: response.data.mass,
                        "Hair Color": response.data.hair_color,
                    };
                    axios.get(response.data.homeworld)
                    .then(homeResponse => {
                        setHomeworld(homeResponse.data);
                    })
                    .catch(err => {
                        console.log("error response:", err);
                        navigate("/notfound");
                    });
                    setDisplay(copiedResponse);
                }
                else if (selectedSearch==="planets"){
                    setName(response.data.name);
                    setDisplay({
                        "Rotation Period": response.data.rotation_period,
                        "Orbital Period": response.data.orbital_period,
                        Gravity: response.data.gravity,
                        Terrain: response.data.terrain,
                    }
                    );
                }
                else if (selectedSearch==="films"){
                    setName(response.data.name);
                    setDisplay({
                        "Episode Id": response.data.episode_id,
                        Director: response.data.director,
                        Producer: response.data.producer,
                        "Release Date": response.data.release_date,
                    }
                    );
                }
                navigate(`/${selectedSearch}/${searchIdx}`);
            }).catch(err => {
                console.log("error response:", err);
                navigate("/notfound");
        }))
    }

    return(
        <div>
            <form>
                <select onChange={(e) => setSelectedSearch(e.target.value)}>
                    {searchOptions.map((searchOption, i) => {
                        return(<option key={i} value={searchOption}>{searchOption}</option>)
                    })}
                </select>
                <input onChange={(e) => setSearchIdx(e.target.value)} type="number" step="1" />
                <button onClick = {(e) => fetchAPI(e)}>Search</button>
            </form>
        </div>
    );
};

export default Search;