import React from 'react';
import './BigTitle.css'

const BigTitle = ({children}) => {
    return (
        <h2 className='BigTitle'>
            {children}
        </h2>
    );
}

export default BigTitle;
