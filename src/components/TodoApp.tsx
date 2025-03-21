import { useState } from "react"
// Importar componentes
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {

  const [nuevaTarea, setNuevaTarea] = useState<string>('')
  const [listaTareas, setListaTareas] = useState<string[]>([])
  const agregarTarea = () =>{
    if(nuevaTarea.trim() === '') return // Valida si está vacío y no agrega
    setListaTareas(tareasAnteriores => [...tareasAnteriores,nuevaTarea]) // Agrega tarea
    setNuevaTarea('') // Vaciar el input
  }

  const quitarTarea = (indice:number) =>{
    setListaTareas(tareas => tareas.filter((_,i) => i !==indice)) // Filtrar las tareas distintas al indice enviado
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input 
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={agregarTarea}>Agregar Tarea</button>
      </div>
      <ListaTareas listaTareas={listaTareas} borrarTarea={quitarTarea}></ListaTareas>
    </div>
  )
}