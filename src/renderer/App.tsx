import React from 'react'

// Redux
import { Provider } from 'react-redux'
import { store } from '@state/store'

// React Router
import { HashRouter, Routes, Route } from 'react-router-dom'

// Component
import WelcomePage from '@pages/WelcomePage'
import TestPage from '@pages/TestPage'
import LoginPage from './pages/LoginPage'

const Application: React.FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </HashRouter>
    </Provider>
  )
}

export default Application
