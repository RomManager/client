import BoxInput from '@components/utils/BoxInput'
import React from 'react'
import EntryListBox, { EntrylistBoxProps } from './EntryListBox'

type SideBarProps = {
  entryBoxes: Array<EntrylistBoxProps>
}

const SideBar: React.FC<SideBarProps> = ({ entryBoxes }) => {
  return (
    <div className="bg-[#3131316e] w-72 border-r-[1px] border-gray-4">
      <h1 className="text-center text-gray-9 font-sans font-extrabold text-xl mt-3">
        Rom Manager
      </h1>
      <div className="flex place-content-center mt-1 mb-10">
        <BoxInput placeholder="Search" />
      </div>
      <div>
        {entryBoxes.map((box, index) => (
          <EntryListBox
            key={index}
            entryName={box.entryName}
            itemList={box.itemList}
          />
        ))}
      </div>
    </div>
  )
}

export default SideBar
