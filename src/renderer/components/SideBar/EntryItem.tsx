import React from 'react'
import { IoBookmark } from 'react-icons/io5'

type EntryItemProps = {
  itemName: string
}

export const EntryItem: React.FC<EntryItemProps> = ({ itemName }) => {
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

export default EntryItem
