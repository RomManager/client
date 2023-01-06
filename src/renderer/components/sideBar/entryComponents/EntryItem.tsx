import { useAppSelector } from '@renderer/state/hooks'
import { selectCurrentPage } from '@renderer/state/slicers/ui/uiSlice'
import React from 'react'
import { IoBookmark } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export type EntryItemProps = {
  itemName: string
  linkTo: string
}

export const EntryItem: React.FC<EntryItemProps> = ({ itemName, linkTo }) => {
  const currentPage = useAppSelector(selectCurrentPage)

  return (
    <div className="flex flex-row mt-1 ml-3">
      <div className="text-xl text-gray-6 ">
        <IoBookmark />
      </div>
      <Link to={linkTo}>
        <span
          className={`${
            currentPage == linkTo
              ? 'text-gray-9 font-bold'
              : 'text-gray-8 hover:text-gray-9'
          } font-sans text-base ml-2 mt-[-1px]`}
        >
          {itemName}
        </span>
      </Link>
    </div>
  )
}

export default EntryItem
