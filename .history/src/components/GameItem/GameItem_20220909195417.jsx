import React from 'react'
import './GameItem.css'
import GameBuy from '../GameBuy/GameBuy'
import GameCover from '../GameCover/GameCover'
import GameGenre from '../GameGenre/GameGenre'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'

export default function GameItem({game}) {

  const dispath = useDispatch()
  const history = useHistory()

  const handleClick = () => {

  }

  return (
    <div onClick={handleClick} className="game-item">
        <GameCover image={game.image}  />
      <div className="game-item__details">
        <span className="game-item__title"></span>
        <div className="game-item__genre">
        {game.genres.map((genre) => <GameGenre genre={genre} key={genre}/>)}
        </div>
        <div className="game-item__buy">
            <GameBuy game={game}/>
        </div>
      </div>
    </div>
  )
}
