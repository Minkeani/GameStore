import React from "react";
import "./GameItem.css";
import GameBuy from "../GameBuy/GameBuy";
import GameCover from "../GameCover/GameCover";
import GameGenre from "../GameGenre/GameGenre";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentGame } from "../../redux/games/gamesReducer";

export default function GameItem({ game }) {
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispath(setCurrentGame(game));
    navigate(`/app/${game.title}`);
  };

  return (
    <div onClick={handleClick} className="game-item">
      <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title"></span>
        <div className="game-item__genre">
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className="game-item__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
}
