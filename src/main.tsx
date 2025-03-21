import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Importar estilos
import './styles/style.css'
// Importar componentes
import {TodoApp} from './components/TodoApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoApp></TodoApp>
  </StrictMode>,
)
