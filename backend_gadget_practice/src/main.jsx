import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from "@gadgetinc/react"
import { api } from './api'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider value={api.connection.currentClient}>
    <App />
  </Provider>,
)
