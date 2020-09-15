import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditProduct = (props) => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState(0);
    const [ description, setDescription ] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then((res) => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        const editedProduct = {
            title,
            price,
            description
        };
        
        axios.put(`http://localhost:8000/api/products/${props.id}`, editedProduct)
        .then((res) => {
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Product Manager</h1>
                <div>
                    <label>Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} />
                </div>
                <div>
                    <label>Price</label>
                    <input onChange={(e) => setPrice(e.target.value)} type="number" step="0.01" value={price} />
                </div>
                <div>
                    <label>Description</label>
                    <input onChange={(e) => setDescription(e.target.value)} type="text" value={description} />
                </div>
                <input type="submit" value="Edit" />
            </form>
        </div>
    )
}

export default EditProduct;