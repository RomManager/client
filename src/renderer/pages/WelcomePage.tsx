// TODO: Rename file structure to index.html etc
import React from 'react'
import logo from '@assets/icons/electron-logo.png'

import { useAppSelector, useAppDispatch } from '@state/hooks'

import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '@state/slicers/counterSlice'

import { Link } from 'react-router-dom'

const WelcomePage: React.FC = () => {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1 className="text-3xl font-bold text-red-400 pb-5">
        Welcome to the RM Client
      </h1>
      <span>Count: {count}</span>
      <br />
      <button
        onClick={() => dispatch(increment())}
        className="pr-1 bg-red-300 mr-2 mb-2"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="pr-1 bg-red-300 mr-2"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(incrementByAmount(2))}
        className="pr-1 bg-red-300"
      >
        Increment by amount: 2
      </button>
      <img src={logo} style={{ width: 100 }} />

      <Link to="/test">Go to test page</Link>
    </div>
  )
}

export default WelcomePage
