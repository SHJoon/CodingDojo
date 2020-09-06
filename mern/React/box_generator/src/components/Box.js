import React from 'react';

const Box = (props) =>{
    const inlineStyles = {
        backgroundColor: props.inputs.color,
        width: parseInt(props.inputs.length),
        height: parseInt(props.inputs.length),
    };

    return (
        <div style={inlineStyles}></div>
    );
}

export default Box;