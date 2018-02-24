import React from 'react';

export default function Input({ type, name }) {
    return(
        <input
            className="form-control"
            type={type}
            name={name}
        />
    );
}