import PageWithSideBar from '@components/pageTemplates/PageWithSideBar'
import { Rom } from '@renderer/state/slicers/data/dataSlice'
import React from 'react'
import { useLocation } from 'react-router'

export default function GamePage() {
  const { state: game }: { state: Rom } = useLocation()

  return (
    <PageWithSideBar>
      <p>{game.romName}</p>
    </PageWithSideBar>
  )
}
