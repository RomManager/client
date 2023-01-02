import React from 'react'

// Redux
import { Provider } from 'react-redux'
import { store } from '@state/store'

// React Router
import { HashRouter, Routes, Route } from 'react-router-dom'

// Component
import Welcome from '@pages/WelcomePage'
import Test from '@pages/TestPage'

const Application: React.FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </HashRouter>
    </Provider>
  )
}

export default Application
