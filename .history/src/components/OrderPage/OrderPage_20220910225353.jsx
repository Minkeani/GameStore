import React from 'react';
import { useSelector } from 'react-redux';
import './OrderPage.css'

const OrderPage = () => {

    const items = useSelector((state) => state.cart.itemsInCart);

    if(items.length < 1) {
        return <h1>Ваша корзина пуста!</h1>
    }

    return (
        <div>
            12
        </div>
    );
}

export default OrderPage;
