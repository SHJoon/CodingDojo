import React, { useState, useEffect } from 'react';

const Results = (props) => {
    const {category, id, display, setDisplay} = props;

    return(
        <div>
            <h1>{id}: { display.name }</h1>
            <div>
                {Object.entries(display).slice(1,5).map(([key, val]) => {
                    return(<p key={key}>{key}: {val}</p>);
                })}
            </div>
        </div>
    );
};

export default Results;