import React from 'react'
import './GameItem.css'
import GameBuy from '../GameBuy/GameBuy'
import GameCover from '../GameCover/GameCover'

export default function GameItem({game}) {

  return (
    <div  className="game-item">
        <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title"></span>
        <div className="game-item__genre">
        {game.genres.map((genre) => <GameGenre/>)}
        </div>
        <div className="game-item__buy">
            <GameBuy game={game}/>
        </div>
      </div>
    </div>
  )
}
