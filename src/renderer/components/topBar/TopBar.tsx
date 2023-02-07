import React from 'react'
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5'

const TopBar: React.FC = () => {
  return (
    <div className="flex justify-between ml-2 mt-2">
      <div className="flex flex-row">
        <div className="flex flex-row text-white text-lg justify-between w-8">
          <IoArrowBackOutline />
          <IoArrowForwardOutline />
        </div>
        <span>This is the topbar</span>
        <span>This is the 2nd text for layout</span>
      </div>
      <div>
        <span>Your profile</span>
      </div>
    </div>
  )
}

export default TopBar
