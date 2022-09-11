import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="wrapper">
            <Link to='/' className='header__store-title'>Game Store</Link>

            </div>
        </div>
    );
}

export default Footer;
