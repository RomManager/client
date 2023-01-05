import React, { useState } from 'react'
import { IoChevronUp } from 'react-icons/io5'
import EntryItem from './EntryItem'

type EntrylistBoxProps = {
  entryName: string
  itemList: Array<{
    itemName: string
  }>
}

const EntryListBox: React.FC<EntrylistBoxProps> = ({ entryName, itemList }) => {
  const [isOpen, setIsOpen] = useState(true) // If box list is open

  return (
    <div className="mt-10 mx-4 flex flex-col">
      <div className="flex flex-row justify-between">
        <span className="text-gray-7 font-sans font-extrabold text-xs uppercase tracking-wider">
          {entryName}
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
          {itemList.map((item, index) => (
            <EntryItem key={index} itemName={item.itemName} />
          ))}
        </div>
      )}
      <p>Test</p>
    </div>
  )
}

export default EntryListBox
