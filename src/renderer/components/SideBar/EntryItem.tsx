import React from 'react'
import { IoBookmark } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export type EntryItemProps = {
  itemName: string
  linkTo: string
}

export const EntryItem: React.FC<EntryItemProps> = ({ itemName, linkTo }) => {
  return (
    <div className="flex flex-row mt-1 ml-3">
      <div className="text-xl text-gray-6 ">
        <IoBookmark />
      </div>
      <Link to={linkTo}>
        <span className="text-gray-8 font-sans text-base ml-2 mt-[-1px] hover:cursor-pointer hover:text-gray-9">
          {itemName}
        </span>
      </Link>
    </div>
  )
}

export default EntryItem
