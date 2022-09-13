import React from "react";
import "./CartItem.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setItemInCart,
  deleteItemFromCart,
} from "../../redux/cart/reducerCart";

const CartItem = ({ title, price, game }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handleDelete = (e) => {
    e.stopPropagation();
    if (!isItemInCart) {
      dispatch(setItemInCart(game));
    } else {
      dispatch(deleteItemFromCart(game.id));
    }
  };

  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`);
}

  return (
    <div className="cart-item">
      <span onClick={handleClick}>{title} </span>
      <div className="cart-item__price">
        <span>{price} руб.</span>
        <button onClick={handleDelete}>удалить</button>
      </div>
    </div>
  );
};

export default CartItem;
