import React from 'react';
import './CartMenu.css'
const CartMenu = ({items, onClick}) => {
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
