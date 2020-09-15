import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const SingleProduct = (props) => {
    const [ product, setProduct ] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err));
    }, []);

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${props.id}`)
        .then((res) => {
            navigate("/");
        })
        .catch((err) => {
            console.error(err);
        })
    }

    return(
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/${props.id}/edit`}>Edit Product</Link>
            <button onClick={handleDelete}>Delete Product</button>
        </div>
    )
};

export default SingleProduct;