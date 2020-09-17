import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const PlayerList = (props) => {
    const [ players, setPlayers ] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players`)
        .then((res) => {
            setPlayers(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }, []);

    const handleDelete = (delId, playerName) => {
        if (window.confirm(`Are you sure you want to remove ${playerName}?`)){
            axios.delete(`http://localhost:8000/api/players/${delId}`)
            .then(res => {
                const filteredPlayers = players.filter((player) => {
                    return player._id !== delId;
                })
                setPlayers(filteredPlayers);
            })
            .catch(err => console.error(err));
        };
    }

    return(
        <div>
            <Link to="/players/list">List  |</Link>
            <Link to="/players/addplayer">|  Add Player</Link>
            <table style={{marginLeft:"600px"}}>
                <thead>
                    <tr>
                        <td>Team Name</td>
                        <td>Preferred position</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, i) => {
                        return(
                            <tr key={i}>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                <td><button onClick={(e) => handleDelete(player._id, player.name)} style={{backgroundColor:"red",color:"white"}}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default PlayerList;