import React from 'react';
import './Btn.css'
import classNames from 'classnames';

const Btn = ({onClick, type, children, size = 's' }) => {
   
    const btnClass = classNames({
        'btn': true,
        'btn--secondary': type === 'secondary',
        'btn--primary': type === 'primary',
        'btn--small': size === 's',
        'btn--medium': size === 'm',
      });
   
    return (
        <button>
            {children}
        </button>
    );
}

export default Btn;
