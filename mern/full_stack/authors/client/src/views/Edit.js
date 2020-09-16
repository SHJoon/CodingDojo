import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import Form from '../components/Form';

const Edit = (props) => {
    const [errors, setErrors] = useState(null);
    const [formData, setFormData] = useState({
        name:""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
        .then((res) => setFormData({name: res.data.name}))
        .catch((err) => console.log(err));
    }, [])

    const handleEdit = () => {
        axios.put(`http://localhost:8000/api/authors/${props.id}`, formData)
        .then((res) => navigate("/"))
        .catch((err) => {
            setErrors(err.response.data.errors);
        });
    }

    return(
        <div>
            <Form formData={formData} setFormData={setFormData} errors={errors} />
            <button onClick={(e) => navigate("/")}>Cancel</button>
            <button onClick={handleEdit}>Edit</button>
        </div>
    )
};

export default Edit;