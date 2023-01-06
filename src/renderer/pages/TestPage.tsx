import GradientFullPageLite from '@components/pageTemplates/GradientFullPageLite'
import ConfiguredSideBar from '@components/sideBar/ConfiguredSideBar'
import { useAppDispatch } from '@renderer/state/hooks'
import { setCurrentPage } from '@renderer/state/slicers/ui/uiSlice'
import React, { useEffect } from 'react'

export default function TestPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // Set current page for the sidebar
    dispatch(setCurrentPage('/test'))
  })

  return (
    <GradientFullPageLite>
      <ConfiguredSideBar />
      <p>Test</p>
    </GradientFullPageLite>
  )
}
