import React from 'react'
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoFilterOutline,
  IoPersonCircleOutline,
  IoSettingsOutline,
} from 'react-icons/io5'
import BoxInput from '@components/utils/BoxInput'

const TopBar: React.FC = () => {
  return (
    <div className="flex justify-between ml-2 mt-2">
      <div className="flex flex-row">
        <div className="flex flex-row text-lg text-gray-8">
          <button className="mr-[-3px] hover:text-gray-10">
            <IoChevronBackOutline />
          </button>
          <button className="hover:text-gray-10">
            <IoChevronForwardOutline />
          </button>
        </div>
        <button className="mx-2 text-gray-8 text-lg flex flex-row bg-gray-10 bg-opacity-10 rounded-md px-2 hover:text-gray-9">
          <div className="pt-[5px]">
            <IoFilterOutline />
          </div>
          <span className="pt-[3px] text-base pl-2 font-sans">Filter</span>
        </button>
        <input
          className="bg-gray-10 bg-opacity-10 rounded-md px-2 text-gray-9 placeholder-gray-7 focus:outline-none w-48"
          placeholder="Search"
        />
        <button className="text-lg text-gray-9 bg-gray-10 rounded-md bg-opacity-10 ml-2 p-1 hover:text-gray-10">
          <IoSettingsOutline />
        </button>
      </div>
      <div>
        <button className="text-lg text-gray-9 bg-gray-10 bg-opacity-10 hover:text-gray-10 rounded-md mr-2 p-1">
          <IoPersonCircleOutline />
        </button>
      </div>
    </div>
  )
}

export default TopBar