import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const NewPlayer = (props) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState("");

    const handleName = (e) => {
        setName(e.target.value);

        if (e.target.value.length < 2 && e.target.value.length !== 0){
            setErrors({
                name: {
                    message:"The name has to be minimum 2 characters!(Front-end)"
        }})}
        else {
            setErrors({});
        }
    }

    const handlePosition = (e) => {
        setPosition(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name,
            position
        }
        
        axios.post(`http://localhost:8000/api/players/create`, formData)
        .then((res) => {
            navigate("/players/list");
        })
        .catch((err) => {
            setErrors(err.response.data.errors);
        });
    }

    return(
        <div>
            <Link to="/players/list">List  |</Link>
            <Link to="/players/addplayer">|  Add Player</Link>
            <form onSubmit={handleSubmit}>
                <h2>Add Player</h2>
                <div>
                    <label>Player Name:</label>
                    <input onChange={handleName} type="text" />
                </div>
                {errors?.name && (
                    <p style={{color:"red"}}>{errors.name?.message}</p>
                )}
                <div>
                    <label>Preferred Position:</label>
                    <input onChange={handlePosition} type="text" />
                </div>
                <button>ADD</button>
            </form>
        </div>
    )
};

export default NewPlayer;