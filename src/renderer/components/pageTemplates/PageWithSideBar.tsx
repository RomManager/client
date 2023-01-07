import GradientFullPageLite from '@components/pageTemplates/GradientFullPageLite'
import ConfiguredSideBar from '@components/sideBar/ConfiguredSideBar'
import { useAppDispatch } from '@renderer/state/hooks'
import { setCurrentPage } from '@renderer/state/slicers/ui/uiSlice'
import React, { useEffect } from 'react'

/*
	Default Page Component for all pages connected with the sidebar
*/
const PageWithSideBar: React.FC<{
  pageLink: string
  children: React.ReactNode
}> = ({ pageLink, children }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // Set current page for the sidebar
    dispatch(setCurrentPage(pageLink))
  })

  return (
    <GradientFullPageLite>
      <ConfiguredSideBar />
      <div className="w-screen">{children}</div>
    </GradientFullPageLite>
  )
}

export default PageWithSideBar
