import React, { useState } from 'react';
import axios from 'axios';
import AllProducts from '../components/AllProducts';

const PersonForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/products/create", {
            title,
            price,
            description
        })
        .then( res => console.log(res))
        .catch( err => console.log(err));
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Product Manager</h1>
                <div>
                    <label>Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Price</label>
                    <input onChange={(e) => setPrice(e.target.value)} type="number" step="0.01" />
                </div>
                <div>
                    <label>Description</label>
                    <input onChange={(e) => setDescription(e.target.value)} type="text" />
                </div>
                <input type="submit" value="Create" />
            </form>
            <AllProducts />
        </div>
    );
}

export default PersonForm;