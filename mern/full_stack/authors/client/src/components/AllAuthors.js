import axios from 'axios';
import React from 'react';
import {navigate} from '@reach/router';

const AllAuthors = (props) => {
    const { authors, setAuthors } = props;

    const handleDelete = (delId) => {
        axios.delete(`http://localhost:8000/api/authors/${delId}`)
        .then((res) => {
            const filteredAuthors = authors.filter((author) => {
                return author._id !== delId;
            });

            setAuthors(filteredAuthors);
        })
        .catch((err) => {
            console.error(err);
        })
    }

    return(
        <div>
            <p>We have quotes by:</p>
            <table style={{marginLeft:"820px",width:"300px"}}>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                {authors.map((author, i) => {
                    return(
                        <tbody key={i}>
                            <tr>
                                <td>{author.name}</td>
                                <td>
                                    <button onClick={(e) => navigate(`/edit/${author._id}`)}>Edit</button>
                                    <button onClick={(e) => handleDelete(author._id)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    );
}

export default AllAuthors;