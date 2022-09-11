import React from 'react';
import './P.css'

const P = ({children}) => {
    return (
        <div className='paragraph'>
            {children}
        </div>
    );
}

export default P;
