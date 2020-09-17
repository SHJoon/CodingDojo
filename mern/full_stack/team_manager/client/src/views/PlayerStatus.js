import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const PlayerStatus = (props) => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players`)
        .then((res) => {
            setPlayers(res.data);
        })
        .catch((err) => console.error(err));
    }, [])

    const handleClick = (playerIndex, playerId, status) => {
        const copiedPlayers = [...players];
        copiedPlayers[playerIndex][`game${props.gameId}`] = status;

        axios.put(`http://localhost:8000/api/players/${playerId}`, copiedPlayers)
        .then((res) => setPlayers(copiedPlayers))
        .catch((err) => console.error(err));
    }

    return(
        <div>
            <h1>Player Status - Game {props.gameId}</h1>
            <br />
            <p>
                <Link to="/status/game/1">Game 1</Link>|
                <Link to="/status/game/2">Game 2</Link>|
                <Link to="/status/game/3">Game 3</Link>
            </p>
            <table style={{marginLeft:"600px",border:"1px solid black", borderCollapse:"collapse"}}>
                <thead>
                    <tr>
                        <td style={{border:"solid 1px black", padding:"3px"}}>Team Name</td>
                        <td style={{border:"solid 1px black", padding:"3px"}}>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, i) => {
                            const playingStyle = {};
                            const notPlayingStyle = {};
                            const undecidedStyle = {};
                            if (player[`game${props.gameId}`] == 'Playing'){
                                playingStyle.color = "white";
                                playingStyle.backgroundColor = "green";
                            }
                            else if (player[`game${props.gameId}`] == 'Not Playing'){
                                notPlayingStyle.color = "white";
                                notPlayingStyle.backgroundColor = "red";
                            }
                            else{
                                undecidedStyle.backgroundColor = "yellow";
                            }
                            return(
                                <tr key={i}>
                                    <td style={{border:"solid 1px black", padding:"3px"}}>{player.name}</td>
                                    <td style={{border:"solid 1px black", padding:"3px"}}>
                                        <button onClick={(e) => handleClick(i, player._id, 'Playing')} style={playingStyle}>Playing</button>
                                        <button onClick={(e) => handleClick(i, player._id, 'Not Playing')} style={notPlayingStyle}>Not Playing</button>
                                        <button onClick={(e) => handleClick(i, player._id, 'Undecided')} style={undecidedStyle}>Undecided</button>
                                    </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};

export default PlayerStatus;