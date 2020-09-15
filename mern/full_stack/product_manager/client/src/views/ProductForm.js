import React, { useState } from 'react';
import axios from 'axios';
import AllProducts from '../components/AllProducts';

const PersonForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [ products, setProducts ] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            title,
            price,
            description
        }
        axios.post("http://localhost:8000/api/products/create", newProduct)
        .then( res => setProducts([...products, res.data]))
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
            <AllProducts products={products} setProducts={setProducts} />
        </div>
    );
}

export default PersonForm;