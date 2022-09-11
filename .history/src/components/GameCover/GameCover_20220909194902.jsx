import React from 'react'
import './GameCover.css'

export default function GameCover({image}) {
  return (
    <div
    {...props}
    className="game-cover"
    style={{ backgroundImage: `url(${image})` }}
/>
  )
}
