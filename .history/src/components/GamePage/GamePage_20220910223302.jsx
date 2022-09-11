import React from "react";
import "./GamePage.css";
import { useSelector } from "react-redux";

const GamePage = () => {

    const game = useSelector(state => state.games.currentGame);

  return (
    <div className="game-page">
      <h1 className="game-page__title"></h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            width="90%"
            height="400px"
            src={''}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
