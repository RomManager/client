import PageWithSideBar from '@components/pageTemplates/PageWithSideBar'
import { useAppDispatch } from '@renderer/state/hooks'
import { getAllRomsAsync } from '@renderer/state/slicers/data/dataSlice'
import React, { useEffect } from 'react'

export default function AllGamesPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log('test')
  }, [])

  return (
    <PageWithSideBar pageLink="/all_games">
      <button onClick={() => dispatch(getAllRomsAsync())}>Get all roms</button>
    </PageWithSideBar>
  )
}
