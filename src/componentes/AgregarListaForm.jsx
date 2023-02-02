import React from 'react'

export const AgregarListaForm = ({nuevoArt, setNuevoArt, AgregarArt}) => {
  return (
    <>
         {/*Agregar tareas*/ }
      <div className='form'>
        <div className='col'>
          <input
          value={nuevoArt} 
          onChange={(e) => setNuevoArt(e.target.value)}
          className='form-control form-control-lg' placeholder='Ingresa el nombre de  un Cantante'/>
        </div>
        <div className='col-auto'>
          <button
          onClick={AgregarArt} 
          className='btn btn-lg btn-success'>Agregar</button>
        </div>
       </div>
      <br></br>
      </>
  )
}
export default AgregarListaForm;
