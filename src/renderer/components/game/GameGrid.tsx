import { Rom } from '@renderer/state/slicers/data/dataSlice'
import axios from 'axios'
import React, { useState } from 'react'

const GameGrid: React.FC<{ game: Rom }> = ({ game }) => {
  const { id, emulator, releaseDate, romName } = game

  const [isHovering, setIsHovering] = useState(false)

  return (
    <button
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="w-44 shadow-xl rounded-lg hover:cursor-pointer hover:shadow-none focus:outline-none text-center relative bg-gray-0"
    >
      <img
        src={`${axios.defaults.baseURL}/rom/${id}/grid`}
        alt={romName}
        className="hover:opacity-40 rounded-lg"
      />
      <div
        className={`${
          isHovering ? 'visible' : 'invisible'
        } absolute 0 top-0 text-left ml-2 mt-2`}
      >
        <h1 className="font-sans font-bold text-lg leading-[1.20rem] text-gray-9">
          {romName}
        </h1>
        <h1 className="font-sans text-gray-8 leading-[1rem]">{emulator}</h1>
      </div>
    </button>
  )
}

export default GameGrid
