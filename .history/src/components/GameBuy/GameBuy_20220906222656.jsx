import React from 'react'
import './GameBuy.css'
import Btn from '../Btn/Btn'

export default function GameBuy({game}) {
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price}</span>
      <Btn type='primary' onClick={() => null}>
            В корзину
      </Btn>
    </div>
  )
}
