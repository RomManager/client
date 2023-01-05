import BoxInput from '@components/utils/BoxInput'
import React from 'react'
import EntryListBox from './EntryListBox'

const SideBar: React.FC = () => {
  return (
    <div className="bg-[#3131316e] w-72 border-r-[1px] border-gray-4">
      <h1 className="text-center text-gray-9 font-sans font-extrabold text-xl mt-3">
        Rom Manager
      </h1>
      <div className="flex place-content-center mt-1">
        <BoxInput placeholder="Search" />
      </div>
      <EntryListBox />
    </div>
  )
}

export default SideBar
