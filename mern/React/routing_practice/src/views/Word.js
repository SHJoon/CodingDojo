import React from 'react';

const Word = (props) => {
    const inlineStyle = {
        color: props.color,
        backgroundColor: props.back
    }

    return(
        <div>
        {
            isNaN(props.word)?
            <h1 style={inlineStyle}>The word is {props.word}</h1>:
            <h1 style={inlineStyle}>The number is {props.word}</h1>
        }
        </div>
    );
};

export default Word;