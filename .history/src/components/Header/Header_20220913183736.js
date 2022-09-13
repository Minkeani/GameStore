import React from 'react'
import { Link } from 'react-router-dom'
import CartBlock from '../CartBlock/CartBlock'
import cn from 'classnames'
import './Header.css'

export default function Header() {
  return (
    <div className={cn(styles.topnav, active === true ? styles.responsive : '')}>
      <div className="wrapper">
            <Link to='/' className={cn(styles.active, styles.logo)}>Game Store</Link>
            <Link to='/Agreement'>Соглашение</Link>
            <Link to='/support'>Поддержка</Link>
            <a target='blank' href='https://linktr.ee/minkeani'>Связь с нами</a>

      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock/>
      </div>
    </div>
  )
}
