import SideBar from '@components/SideBar/SideBar'
import GradientFullPageLite from '@components/pageTemplates/GradientFullPageLite'
import React from 'react'

export default function TestPage() {
  return (
    <GradientFullPageLite>
      <SideBar
        entryBoxes={[
          {
            entryName: 'Emulator Galaxy',
            itemList: [
              { itemName: 'Discover', linkTo: '/' },
              { itemName: 'Home', linkTo: '/' },
            ],
          },
          {
            entryName: 'Games',
            itemList: [
              { itemName: 'All Games', linkTo: '/' },
              { itemName: 'Installed', linkTo: '/' },
            ],
          },
        ]}
      />
      <p>Test</p>
    </GradientFullPageLite>
  )
}
