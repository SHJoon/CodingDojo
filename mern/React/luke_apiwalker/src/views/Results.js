import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

const Results = (props) => {
    const {category, id, display, name, homeworld} = props;

    return(
        <div>
            <h1>{id}: { name }</h1>
            <div>
                {Object.entries(display).map(([key, val]) => {
                    return(<p key={key}>{key}: {val}</p>);
                })}
            </div>
            {(category==="people" && homeworld !=null) && <p>Homeworld: {homeworld.name}</p>}
        </div>
    );
};

export default Results;