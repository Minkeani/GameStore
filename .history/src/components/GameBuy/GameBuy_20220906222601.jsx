import React from 'react'
import './GameBuy.css'
import Btn from '../Btn/Btn'

export default function GameBuy({game}) {
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price}</span>
      <Btn onClick={() => null}>
            Купить
      </Btn>
    </div>
  )
}
