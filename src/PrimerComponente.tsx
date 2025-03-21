interface PrimerComponenteProps {
  titulo: string;
}

export const PrimerComponente = ({titulo}: PrimerComponenteProps) => {
  console.log(titulo)
  return (
    <>
        <h1>Props: {titulo}</h1>
    </>
  )
}
