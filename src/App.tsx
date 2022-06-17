import React from 'react'
import { Banner } from './components'
import ReactDOM from 'react-dom/client'

export function addDiv() {
  const reactDiv = document.createElement('div')
  reactDiv.className = 'react'
  reactDiv.id = 'reactRoot'
  document.body.appendChild(reactDiv)

  //const root = ReactDOM.createRoot(document.getElementById('reactRoot'))
  const root = ReactDOM.createRoot(reactDiv)
  root.render(<App />)
}

export default function App() {
  return <Banner />
}
