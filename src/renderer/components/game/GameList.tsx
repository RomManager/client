import { Rom } from '@renderer/state/slicers/data/dataSlice'
import React from 'react'
import GameGrid from './GameGrid'

const GameList: React.FC<{ games: Array<Rom> }> = ({ games }) => {
  return (
    <div className="ml-4 my-4 flex flex-wrap">
      {games.map(game => (
        <div className="w-44 mx-3 my-2" key={game.id}>
          <GameGrid game={game} />
        </div>
      ))}
    </div>
  )
}

export default GameList
