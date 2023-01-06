import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const BoxSearch: React.FC = () => {
  return (
    <div className="bg-white mx-4 bg-opacity-10 py-1 px-1 w-full rounded-md focus:outline-none text-gray-10 flex flex-row">
      <div className="text-lg mr-2 mt-[1.5px] text-gray-8">
        <IoSearchOutline />
      </div>
      <input
        className="bg-transparent focus:outline-none text-gray-10"
        placeholder="Search"
      />
    </div>
  )
}

export default BoxSearch
