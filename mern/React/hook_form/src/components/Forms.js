import React from 'react';

const Forms = (props) =>{

    const{inputs, setInputs} = props;

    const onChange = (event) =>{
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });
    };
    return(
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input onChange={onChange} name="firstName" type="text"></input>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChange} name="lastName" type="text"></input>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={onChange} name="email" type="text"></input>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={onChange} name="password" type="password"></input>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={onChange} name="confirmPassword" type="password"></input>
            </div>
        </form>
    );
};

export default Forms;