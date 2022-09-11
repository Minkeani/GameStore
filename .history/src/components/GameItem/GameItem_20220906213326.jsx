import React from 'react'
import './GameItem.css'

export default function GameItem({game}) {

  return (
    <div  className="game-item">
      <div className="game-item__details">
        <span className="game-item__title"></span>
        <div className="game-item__genre">
        {game.genres.map((genre) => genre)}
        </div>
        <div className="game-item__buy">
            
        </div>
      </div>
    </div>
  )
}
