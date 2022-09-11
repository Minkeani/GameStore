import React from 'react'
import { Link } from 'react-router-dom'
import CartBlock from '../CartBlock/CartBlock'
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="wrapper">
            <Link to='/' className='header__store-title'>Game Store</Link>
            <Link to='/'>Соглашение</Link>
            <Link to='/'>Поддержка</Link>
            <a to='/'>Связь с нами</a>

      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock/>
      </div>
    </div>
  )
}
