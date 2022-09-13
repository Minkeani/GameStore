import React from 'react'
import { Link } from 'react-router-dom'
import CartBlock from '../CartBlock/CartBlock'
import cn from 'classnames'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header >
      <div className={cn(styles.topnav, active === true ? styles.responsive : '')}>
            <Link to='/' className={cn(styles.active, styles.logo)}>Game Store</Link>
            <Link to='/Agreement'>Соглашение</Link>
            <Link to='/support'>Поддержка</Link>
            <a target='blank' href='https://linktr.ee/minkeani'>Связь с нами</a>
            <li className={styles.icon}><a href="#" 
            onClick={() => setActive(!active)}
            >☰</a></li>

      </div>
      <div className={styles.favourite}>
        <CartBlock/>
      </div>
    </header>
  )
}
