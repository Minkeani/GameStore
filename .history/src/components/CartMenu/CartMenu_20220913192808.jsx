import React from "react";
import { useSelector } from "react-redux";
import Btn from "../Btn/Btn";
import {CartItem} from '../CartItem/CartItem'
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import "./cart-menu.css";

export const CartMenu = ({ onClick }) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.image}
                image={game.image}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calculateNewValue(items)} руб.</span>
          </div>
          <Btn type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Btn>
        </div>
      ) : null}
    </div>
  );
};
