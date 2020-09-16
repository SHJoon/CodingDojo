import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

import AllAuthors from "../components/AllAuthors";

const Homepage = () => {
    const [ authors, setAuthors ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then((res) => {
            setAuthors(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }, []);

    return(
        <div>
            <Link to="/new">Add an author</Link>
            <AllAuthors authors={authors} setAuthors={setAuthors} />
        </div>
    )
}

export default Homepage;