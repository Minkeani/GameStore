import React from 'react'
import './GameBuy.css'

export default function GameBuy({game}) {
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price}</span>
    </div>
  )
}
