import React from "react";
import "./CartItem.css";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart, deleteItemFromCart} from "../../redux/cart/reducerCart";


const CartItem = ({ title, price }) => {

    const dispath = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)

  return (
    <div className="cart-item">
      <span>{title} </span>
      <div className="cart-item__price">
        <span>{price} руб.</span>
        <button>удалить</button>
      </div>
    </div>
  );
};

export default CartItem;
