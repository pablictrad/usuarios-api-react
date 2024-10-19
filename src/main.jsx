import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { Usuarios } from './components/Usuarios'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usuarios />
  </StrictMode>,
)
