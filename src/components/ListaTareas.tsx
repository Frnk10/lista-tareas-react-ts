import { Tarea } from "./Tarea"

type ListaTareasProps = {
    listaTareas: string[]
    borrarTarea: (indice:number) => void
}

export const ListaTareas = ({listaTareas,borrarTarea}: ListaTareasProps) => {
  return (
    <div className="taskList">
        {listaTareas.map((tarea,indice) => (
            <Tarea key={indice} tarea={tarea} borrarTarea={() =>borrarTarea(indice)}></Tarea>
        )
        )}
    </div>
  )
}