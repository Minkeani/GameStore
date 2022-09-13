import React from 'react'
import { useDispatch } from 'react-redux';
import GameCover from '../GameCover/GameCover';
import { deleteItemFromCart } from '../../redux/cart/reducerCart';
import { useNavigate } from 'react-router-dom';
import { setCurrentGame } from '../../redux/games/gamesReducer';
import './OrderItem.css'

export default function OrderItem({game}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(game.id))
    }

    const handleClick = () => {
        console.log(1);
        dispatch(setCurrentGame(game));
        navigate(`/app/${game.title}`);
    }
    return (
        <div className="order-item">
            <div className="order-item__cover">
                <GameCover image={ game.image }/>
            </div>
            <div className="order-item__title" onClick={handleClick}>
                <span onClick={handleClick}> { game.title } </span>
            </div>
            <div className="order-item__price">
                <span>{ game.price } рауб.</span>
                <button
                    className="delete-icon"
                    onClick={handleDeleteClick}
                >delete</button>
            </div>
        </div> )
}

