// A page with a gradient background | Lite version with half the opacity
import React from 'react'

const GradientFullPageLite: React.FC<{
  children: React.ReactNode
  className?: string
}> = props => {
  return (
    <div className={`bg-gradient-to-tr from-blue-0 to-pink-0 h-screen flex`}>
      <div
        className={`bg-[#31313180] h-screen w-screen flex  ${
          props.className ? props.className : ''
        }`}
      >
        {props.children}
      </div>
    </div>
  )
}

export default GradientFullPageLite
