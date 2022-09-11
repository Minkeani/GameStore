import React from 'react';
import './Btn.css'

const Btn = ({onClick, type, children, size = 's' }) => {
    return (
        <button>
            {children}
        </button>
    );
}

export default Btn;
