import React from 'react';
import { useSelector } from 'react-redux';
import './OrderPage.css'

const OrderPage = () => {

    const items = useSelector((state) => state.cart.itemsInCart);


    return (
        <div>
            12
        </div>
    );
}

export default OrderPage;
