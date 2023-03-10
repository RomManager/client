import React, { useEffect, useState } from 'react'
import EntryListBox, { EntrylistBoxProps } from './entryComponents/EntryListBox'
import BoxSearch from '@components/utils/BoxSearch'
import { handleAction } from '@renderer/utils/ipcConnection'

type SideBarProps = {
  entryBoxes: Array<EntrylistBoxProps>
}

const SideBar: React.FC<SideBarProps> = ({ entryBoxes }) => {
  const [version, setVersion] = useState(0)

  // Get and set client pkg version
  useEffect(() => {
    const app = document.getElementById('app')
    const versions = JSON.parse(app.getAttribute('data-versions'))

    setVersion(versions?.rom_manager)
  }, [])

  return (
    <div className="flex justify-between flex-col border-gray-4 h-screen bg-[#3131316e] w-72 border-r-[1px]">
      <div>
        <h1 className="text-center text-gray-9 font-sans font-extrabold text-xl mt-3">
          Rom Manager
        </h1>
        <div className="flex place-content-center mt-1 mb-5">
          <BoxSearch />
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
      <button
        onClick={() => {
          handleAction('open_url', 'https://github.com/RomManager/client')
        }}
        className="text-center mr-3 font-sans text-sm text-gray-7 font-light mb-1"
      >
        RM Client v{version}
      </button>
    </div>
  )
}

export default SideBar
