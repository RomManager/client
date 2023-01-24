import { Rom } from '@renderer/state/slicers/data/dataSlice'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const GameGrid: React.FC<{ game: Rom }> = ({ game }) => {
  const navigate = useNavigate()
  const { id, emulator, romName } = game

  const [isHovering, setIsHovering] = useState(false)

  return (
    <button
      onClick={() => navigate(`/game`, { state: game })}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="w-44 h-[264px] shadow-lg rounded-lg hover:cursor-pointer hover:shadow-none focus:outline-none text-center relative bg-gray-0"
    >
      <img
        src={`${axios.defaults.baseURL}/rom/${id}/grid`}
        alt={romName}
        className={`${
          isHovering ? 'opacity-40' : 'opacity-100'
        } rounded-lg w-44 h-[264px]`}
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
