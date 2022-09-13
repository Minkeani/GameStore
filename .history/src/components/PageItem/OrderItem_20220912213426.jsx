import React from 'react'
import { useDispatch } from 'react-redux';
import GameCover from '../GameCover/GameCover';
import { deleteItemFromCart } from '../../redux/cart/reducerCart';
import './OrderItem.css'

export default function OrderItem({game}) {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(game.id))
    }
    return (
        <div className="order-item">
            <div className="order-item__cover">
                <GameCover image={ game.image }/>
            </div>
            <div className="order-item__title">
                <span> { game.title } </span>
            </div>
            <div className="order-item__price">
                <span>{ game.price } руб.</span>
                <button
                    className="delete-icon"
                    onClick={handleDeleteClick}
                >delete</button>
            </div>
        </div> )
}

