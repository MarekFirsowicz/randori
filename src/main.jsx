import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/main.scss'
import App from './App.jsx'
import { ScoreProvider } from './hooks/ScoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScoreProvider>
      <App />
    </ScoreProvider>    
  </StrictMode>,
)
