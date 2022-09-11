import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <div className="wrapper">
            <Link to='/' className='header-store-title'>Game Store</Link>
      </div>
    </div>
  )
}
