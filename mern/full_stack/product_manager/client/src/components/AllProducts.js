import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllProducts = (props) => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    }, [products]);

    return(
        <div>
            <hr></hr>
            <h1>All Products</h1>
            {products.map((product, i) => {
                return(
                <div key={i}>
                <Link to={`/${product._id}`}>{product.title}</Link>
                </div>
                )
            })}
        </div>
    )
};

export default AllProducts;