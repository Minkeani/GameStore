import React from 'react';
import './CartMenu.css'
const CartMenu = ({items, onClick}) => {
    return (
        <div className="cart-menu">
            <div className="cart-menu__games-list">
                { 
                    items.map(game => game.title)
                }
            </div>
        </div>
    );
}

export default CartMenu;
