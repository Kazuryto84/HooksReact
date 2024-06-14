import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'
import React from 'react'

const root = createRoot(document.getElementById('app'))

root.render(<App />)