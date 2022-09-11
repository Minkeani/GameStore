import React from 'react'
import './CartBlock.css'
import {BiCartAlt} from 'react-icons/bi'

export default function CartBlock() {
  return (
    <div>
      <BiCartAlt size={35} className='cart-block__item'/>
      <span className='cart-block__total-price'>1000 руб</span>
    </div>
  )
}
