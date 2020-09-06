import React from 'react';

const SingleBox = (props) => {

    const inlineStyles = {
        backgroundColor: props.box.color,
        width: "100px",
        height: "100px",
    };

    return (
        <div style={inlineStyles}></div>
    );
}