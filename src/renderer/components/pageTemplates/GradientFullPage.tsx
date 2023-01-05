// A page with a gradient background
import React from 'react'

const GradientFullPage: React.FC<{
  children: React.ReactNode
  className?: string
}> = props => {
  return (
    <div
      className={`bg-gradient-to-tr from-blue-0 to-pink-0 h-screen flex ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </div>
  )
}

export default GradientFullPage
