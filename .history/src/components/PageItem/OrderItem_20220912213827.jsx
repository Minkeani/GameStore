import React from 'react'
import { useDispatch } from 'react-redux';
import GameCover from '../GameCover/GameCover';
import { deleteItemFromCart } from '../../redux/cart/reducerCart';
import { useNavigate } from 'react-router-dom';
import './OrderItem.css'

export default function OrderItem({game}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(game.id))
    }

    const handleClick = () => {
        dispatch(setCurrentGame(game));
        navigate(`/app/${game.title}`);
    }
    return (
        <div className="order-item">
            <div className="order-item__cover">
                <GameCover image={ game.image }/>
            </div>
            <div className="order-item__title">
                <span onClick={handleClick}> { game.title } </span>
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

