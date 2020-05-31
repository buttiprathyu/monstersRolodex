import React from 'react';
import './search-box.component.css';

//functional component - which do not need access to state or lifecyle methods
// they just return the HTML.
export const SearchBox = ({ placeholder, handleChange }) => (
    <input type='search'
            className = 'search' 
            placeholder= {placeholder} 
            onChange={handleChange}/>
);
