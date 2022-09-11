import React from 'react'
import './CartBlock.css'
import { useSelector } from 'react-redux'
import {BiCartAlt} from 'react-icons/bi'

export default function CartBlock() {
  return (
    <div className="cart-block">
      <BiCartAlt size={35}  className="cart-icon"/>
      <span className="total-price">1000 руб</span>
    </div>
  )
}
