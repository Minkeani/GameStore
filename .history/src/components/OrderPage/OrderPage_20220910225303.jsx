import React from 'react';
import { useSelector } from 'react-redux';
import './OrderPage.css'

const OrderPage = () => {

    const items = useSelector((state) => state.cart.itemsInCart);


    return (
        <div>
            
        </div>
    );
}

export default OrderPage;
