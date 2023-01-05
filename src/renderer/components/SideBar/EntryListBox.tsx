import React, { useState } from 'react'
import { IoChevronUp, IoBookmark } from 'react-icons/io5'

const EntryListBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true) // If box list is open

  return (
    <div className="mt-10 mx-4 flex flex-col">
      <div className="flex flex-row justify-between">
        <span className="text-gray-7 font-sans font-extrabold text-xs uppercase tracking-wider">
          Emulator Galaxy
        </span>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen ? `rotate-0 ` : `rotate-180 `}
        text-gray-7 ease-in-out  hover:scale-125 duration-300 hover:cursor-pointer text-base`}
        >
          <IoChevronUp />
        </div>
      </div>
      {isOpen && (
        // TODO: Create animation when opening/closing
        <div className={`mt-2`}>
          <Item itemName="Discover" />
          <Item itemName="Home" />
          <Item itemName="Test" />
        </div>
      )}
      <p>Test</p>
    </div>
  )
}

const Item: React.FC<{ itemName: string }> = ({ itemName }) => {
  return (
    <div className="flex flex-row mt-1 ml-3">
      <div className="text-xl text-gray-6 ">
        <IoBookmark />
      </div>
      <span className="text-gray-8 font-sans text-base ml-2 mt-[-1px] hover:cursor-pointer hover:text-gray-9">
        {itemName}
      </span>
    </div>
  )
}

export default EntryListBox
