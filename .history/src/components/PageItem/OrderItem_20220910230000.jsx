import React from 'react'
import './OrderItem.css'

export default function OrderItem() {
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
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item__delete-icon"
                    onClick={handleDeleteClick}
                />
            </div>
        </div> )
}

