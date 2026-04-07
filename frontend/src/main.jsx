import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div><h1>Hello</h1></div>
  </StrictMode>,
)
