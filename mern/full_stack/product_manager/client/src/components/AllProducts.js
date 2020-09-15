import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllProducts = (props) => {
    const { products, setProducts } = props;
    // const [ products, setProducts ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    }, []);

    const handleDelete = (delId) => {
        axios.delete(`http://localhost:8000/api/products/${delId}`)
        .then((res) => {
            const filteredProducts = products.filter((product) => {
                return product._id !== delId;
            })
            setProducts(filteredProducts);
        })
        .catch((err) => {
            console.error(err);
        });
    }

    return(
        <div>
            <hr></hr>
            <h1>All Products</h1>
            {products.map((product) => {
                return(
                <div key={product._id}>
                <hr></hr>
                <Link to={`/${product._id}`}>{product.title}</Link>
                <button onClick={(e) => {handleDelete(product._id)}} >Delete</button>
                </div>
                )
            })}
        </div>
    )
};

export default AllProducts;