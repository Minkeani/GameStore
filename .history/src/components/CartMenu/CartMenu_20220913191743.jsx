import React from 'react';
import './CartMenu.css'
import Btn from '../Btn/Btn';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { calcTotalPrice } from '../utils/utils';
import uniqid from 'uniqid'

const CartMenu = ({onClick}) => {

    const items = useSelector((state) => state.cart.itemsInCart);

    return (
        <div className={active ? "cart-menu active" : "cart-menu"}
        onClick={() => setActive(false)}
        >
      <div className="cart-menu__games-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={uniqid()}
                game={game}
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
            <span>{calcTotalPrice(items)} руб.</span>
          </div>
          <Btn type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Btn>
        </div>
      ) : null}
    </div>
    );
}

export default CartMenu;
