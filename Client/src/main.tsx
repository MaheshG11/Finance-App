
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/query'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <App />
  </>,
)
