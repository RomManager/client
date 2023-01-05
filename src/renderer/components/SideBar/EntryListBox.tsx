import React from 'react'
import { ChevronUp } from 'lucide-react'

const EntryListBox: React.FC = () => {
  return (
    <div className="mt-10 mx-4 text-gray-7 font-sans font-extrabold text-xs uppercase tracking-wider flex flex-row justify-between">
      <span>Emulator Galaxy</span>
      <div onClick={() => console.log('test')} className="cursor-pointer">
        <ChevronUp color="#bababa" size={18} />
      </div>
    </div>
  )
}

export default EntryListBox
