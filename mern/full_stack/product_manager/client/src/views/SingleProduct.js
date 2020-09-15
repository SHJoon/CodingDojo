import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const SingleProduct = (props) => {
    const { productId } = props;

    const [ product, setProduct ] = useState({});

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${productId}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err));
    }, []);

    return(
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
};

export default SingleProduct;