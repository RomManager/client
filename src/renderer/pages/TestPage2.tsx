import GradientFullPageLite from '@components/pageTemplates/GradientFullPageLite'
import ConfiguredSideBar from '@components/sideBar/ConfiguredSideBar'
import { useAppDispatch } from '@renderer/state/hooks'
import { setCurrentPage } from '@renderer/state/slicers/ui/uiSlice'
import React, { useEffect } from 'react'

export default function TestPage2() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // Set current page for the sidebar
    dispatch(setCurrentPage('/test2'))
  })

  return (
    <GradientFullPageLite>
      <ConfiguredSideBar />
      <p>Test2</p>
    </GradientFullPageLite>
  )
}
