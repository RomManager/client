import React from 'react'

import { Provider } from 'react-redux'
import { store } from '@state/store'
import Welcome from '@components/Welcome'

const Application: React.FC = () => {
  return (
    <Provider store={store}>
      <Welcome />
    </Provider>
  )
}

export default Application
