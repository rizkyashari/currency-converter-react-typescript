import React from 'react'
import { render } from 'react-dom'
import './styles/App.css'
import App from './App'

const rootElement = document.getElementById('root')

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
)