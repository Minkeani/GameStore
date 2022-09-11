import React, { useState } from "react";
import "./CartBlock.css";
import { useSelector } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import ItemsInCart from "../ItemsInCart/ItemsInCart";
import CartMenu from "../CartMenu/CartMenu";

export default function CartBlock() {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = items.reduce((acc, game) => (acc += game.price), 0);
  const [isCartMenuVisible, setCartMenuVisible] = useState(false)

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length}/>
      <BiCartAlt size={35} className="cart-icon" onClick={() => setCartMenuVisible(!isCartMenuVisible)} />
      {totalPrice > 0 ? (
        <span className="total-price">{totalPrice} руб</span>
      ) : null}

     {isCartMenuVisible ? <CartMenu items={items} onClick={handleClick} /> : ''} 
    </div>
  );
}
