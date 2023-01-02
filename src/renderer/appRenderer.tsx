import React from 'react'
import { createRoot } from 'react-dom/client'
import WindowFrame from '@misc/window/components/WindowFrame'
import Application from '@components/Application'
import './App.css'
import { Provider } from 'react-redux'

import { store } from './redux/store'

// Say something
console.log('[RomManager] : Renderer execution started')

// Application to Render
const app = (
  <WindowFrame title="Rom Manager" platform="windows">
    <Provider store={store}>
      <Application />
    </Provider>
  </WindowFrame>
)

// Render application in DOM
createRoot(document.getElementById('app')).render(app)
