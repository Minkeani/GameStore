import React from 'react'
import './CartBlock.css'
import {BiCartAlt} from 'react-icons/bi'

export default function CartBlock() {
  return (
    <div>
      <BiCartAlt size={35} className='cart-block__item'/>
      <span>1000</span>
    </div>
  )
}
