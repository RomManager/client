import BoxButton from '@components/utils/BoxButton'
import BoxInput from '@components/utils/BoxInput'
import { useAppDispatch, useAppSelector } from '@renderer/state/hooks'
import {
  loginAsync,
  selectAuthenticated,
} from '@renderer/state/slicers/user/userSlice'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const LoginPage = () => {
  const dispatch = useAppDispatch()
  const isAuthenticated = useAppSelector(selectAuthenticated)

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      // If user is authenticated direcly move to the homepage
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="bg-gradient-to-tr from-blue-0 to-pink-0 h-screen place-content-center flex">
      <div className="bg-gray-1 py-6 pb-12 flex rounded-lg shadow-2xl flex-col h-64 mt-72">
        <h1 className="text-center font-sans font-extrabold text-2xl text-white">
          RomManager
        </h1>
        <div className="mt-4 flex px-5 flex-col items-start">
          <div className="pb-2">
            <BoxInput placeholder="Email" />
          </div>
          <BoxInput placeholder="Password" />
        </div>
        <a className="text-blue-10 text-xs pl-5 py-3">Forgot your password?</a>
        <div className="mt-3 place-content-center grid">
          <BoxButton
            text="Login"
            onClick={() => {
              dispatch(
                loginAsync({
                  email: 'valle@gmail.com',
                  password: 'test',
                })
              )
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
