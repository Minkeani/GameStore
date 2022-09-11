import React from 'react';
import './CartMenu.css'
import { useSelector } from 'react-redux';
const CartMenu = ({items, onClick}) => {

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
        </div>
    );
}

export default CartMenu;
