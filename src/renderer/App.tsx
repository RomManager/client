import React from 'react'

// Redux
import { Provider } from 'react-redux'
import { store } from '@state/store'
import axios from 'axios'

// React Router
import { HashRouter, Routes, Route } from 'react-router-dom'

// Component
import WelcomePage from '@pages/WelcomePage'
import TestPage from '@pages/TestPage'
import LoginPage from './pages/LoginPage'
import TestPage2 from './pages/TestPage2'

const Application: React.FC = () => {
  /* Set default axios base URL */
  axios.defaults.baseURL = 'http://localhost:8080/api'

  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/test2" element={<TestPage2 />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </HashRouter>
    </Provider>
  )
}

export default Application
