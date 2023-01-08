import GameGrid from '@components/game/GameGrid'
import GameList from '@components/game/GameList'
import PageWithSideBar from '@components/pageTemplates/PageWithSideBar'
import { useAppDispatch, useAppSelector } from '@renderer/state/hooks'
import {
  getAllRomsAsync,
  selectAllRoms,
} from '@renderer/state/slicers/data/dataSlice'
import { selectDataStatus } from '@renderer/state/slicers/user/userSlice'
import React, { useEffect } from 'react'

export default function AllGamesPage() {
  const dispatch = useAppDispatch()
  const games = useAppSelector(selectAllRoms)
  const status = useAppSelector(selectDataStatus)

  useEffect(() => {
    // Get all roms and place in the data state
    dispatch(getAllRomsAsync())
  }, [dispatch])

  return (
    <PageWithSideBar pageLink="/all_games">
      <div className="">
        {status == 'loading' || games.length == 0 ? (
          <p>Loading</p>
        ) : (
          <GameList games={games} />
        )}
      </div>
    </PageWithSideBar>
  )
}
