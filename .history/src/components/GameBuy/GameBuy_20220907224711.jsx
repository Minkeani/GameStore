import React from "react";
import "./GameBuy.css";
import Btn from "../Btn/Btn";

export default function GameBuy({ game }) {

  const handleClick = (e) => {
    e.stopPropagation()
    console.log(1);
  }

  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price}</span>
      <Btn type="primary" onClick={handleClick}>
        В корзину
      </Btn>
    </div>
  );
}
