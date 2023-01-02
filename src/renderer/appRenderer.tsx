import React from 'react'
import { createRoot } from 'react-dom/client'
import WindowFrame from '@misc/window/components/WindowFrame'
import App from '@renderer/App'
import './index.css'

// Say something
console.log('[RomManager] : Renderer execution started')

// Application to Render
const app = (
  <WindowFrame title="Rom Manager" platform="windows">
    <App />
  </WindowFrame>
)

// Render application in DOM
createRoot(document.getElementById('app')).render(app)
