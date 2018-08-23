import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import App from 'views/App'

import './index.css'

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById(`root`)

let render = () => {
  ReactDOM.render(
    <App />,
    MOUNT_NODE,
  )
}

render()

registerServiceWorker()
