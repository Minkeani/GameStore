import React from 'react'
import './GameCover.css'

export default function GameCover(props, {props, image}) {
  return (
    <div
    {...props}
    className="game-cover"
    style={{ backgroundImage: `url(${image})` }}
/>
  )
}
