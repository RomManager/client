import React from 'react'
import SideBar from './SideBar'

const ConfiguredSideBar: React.FC = () => {
  return (
    <SideBar
      entryBoxes={[
        {
          entryName: 'Emulator Galaxy',
          itemList: [
            { itemName: 'Discover', linkTo: '/test' },
            { itemName: 'Home', linkTo: '/test2' },
          ],
        },
        {
          entryName: 'Games',
          itemList: [
            { itemName: 'All Games', linkTo: '/all_games' },
            { itemName: 'Installed', linkTo: '/' },
          ],
        },
      ]}
    />
  )
}

export default ConfiguredSideBar
