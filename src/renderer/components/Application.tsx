import React from 'react'
import logo from '@assets/icons/electron-logo.png'

const Application: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-red-400 pb-5">
        Welcome to the RM Client
      </h1>
      <img src={logo} style={{ width: 100 }} />
    </div>
  )
}

export default Application
