import React from "react";
import { useSelector } from "react-redux";
import "./OrderPage.css";
import { calcTotalPrice, enumerate  } from "../utils/utils";
import OrderItem from "../PageItem/OrderItem";
import uniqid from 'uniqid'

const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>Ваша корзина пуста!</h1>;
  }

  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((game) => (
          <OrderItem key={uniqid()} game={game} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {items.length}{" "}
            {enumerate(items.length, ["товар", "товара", "товаров"])} на сумму{" "}
            {calcTotalPrice(items)} ру1б.
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
