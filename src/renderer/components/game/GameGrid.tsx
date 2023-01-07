import { Rom } from '@renderer/state/slicers/data/dataSlice'
import React from 'react'

const GameGrid: React.FC<{ game: Rom }> = ({ game }) => {
  const { emulator, gridUrl, releaseDate, romName } = game

  return (
    <div>
      <img src={gridUrl} alt="Logo" />;
    </div>
  )
}

export default GameGrid
