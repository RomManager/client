import { Rom } from '@renderer/state/slicers/data/dataSlice'
import axios from 'axios'
import React from 'react'

const GameGrid: React.FC<{ game: Rom }> = ({ game }) => {
  const { emulator, releaseDate, romName } = game

  return (
    <div>
      <img src={`${axios.defaults.baseURL}/rom/1/grid`} alt="Logo" />;
    </div>
  )
}

export default GameGrid
