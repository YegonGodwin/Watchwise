import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Components/hero.jsx'
import Movies from './Components/Movies.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Movies/>
  </StrictMode>,
)
