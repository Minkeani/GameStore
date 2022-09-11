import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import P from '../Ui/P/P';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="wrapper">
            <Link to='/' className='header__store-title'>Game Store</Link>
            <P>Платформа для продажи цифровых товаров. Торговый агрегатор по оказанию услуг в сфере торговли. Все закупаемые ключи приобретаются у официальных поставщиков. Все названия продуктов, компаний и марок, логотипы и товарные знаки являются собственностью соответствующих владельцев.</P>
            <a href=''>Связаться</a>
            </div>
        </div>
    );
}

export default Footer;
