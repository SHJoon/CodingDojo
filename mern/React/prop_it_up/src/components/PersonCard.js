import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            current_age: this.props.age
        };
    }

    handleClick = () => {
        this.setState({
            current_age: this.state.current_age + 1
        });
    };

    render(){
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.current_age}</p>
                <p>Hair Color: {this.props.color}</p>
                <button onClick={this.handleClick}>Click to increment the age</button>
            </div>
        );
    }
}

export default PersonCard;