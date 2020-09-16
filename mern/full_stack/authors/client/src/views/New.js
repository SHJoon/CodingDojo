import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import Form from '../components/Form';

const New = (props) => {
    const [formData, setFormData] = useState({
        name:""
    })

    const [errors, setErrors] = useState(null);

    const handleNew = () => {
        axios.post(`http://localhost:8000/api/authors/create`, formData)
        .then((res) => navigate("/"))
        .catch((err) => {
            setErrors(err.response.data.errors);
        });
    }

    return(
        <div>
            <Form formData={formData} setFormData={setFormData} errors={errors} />
            <button onClick={(e) => navigate("/")}>Cancel</button>
            <button onClick={handleNew}>Submit</button>
        </div>
    )
};

export default New;