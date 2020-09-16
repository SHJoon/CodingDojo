import React, { useState } from 'react';

const Form = (props) => {
    const {formData, setFormData, errors} = props;

    return(
        <div>
            <label>Author Name: </label>
            <input onChange={(e) => setFormData({name: e.target.value})} type="text" value={formData.name}/>
            {errors?.name && (
                <p style={{color:"red"}}>{errors.name?.message}</p>
            )}
        </div>
    )
}

export default Form;