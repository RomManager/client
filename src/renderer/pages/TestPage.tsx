import SideBar from '@components/SideBar/SideBar'
import GradientFullPageLite from '@components/pageTemplates/GradientFullPageLite'
import React from 'react'

export default function TestPage() {
  return (
    <GradientFullPageLite>
      <SideBar />
      <p>Test</p>
    </GradientFullPageLite>
  )
}
