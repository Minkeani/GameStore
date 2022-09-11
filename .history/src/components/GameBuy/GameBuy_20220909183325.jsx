import React from "react";
import "./GameBuy.css";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../Btn/Btn";
import { setItemInCart } from "../../redux/cart/reducerCart";

export default function GameBuy({ game }) {
  const dispath = useDispatch()

  const items = useSelector(state => state.cart.itemInCart)

  const isItemInCart = items.some(item => item.id === game.id)

  const handleClick = (e) => {
    e.stopPropagation()
    dispath(setItemInCart(game))
    console.log(1);
  }

  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price}</span>
      <Btn type="primary" onClick={handleClick}>
        {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
        
      </Btn>
    </div>
  );
}
