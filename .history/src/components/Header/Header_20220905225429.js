import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div>
      <div className="wrapper">
            <Link to='/' className='header__store-title'>Game Store</Link>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        Cart
      </div>
    </div>
  )
}
