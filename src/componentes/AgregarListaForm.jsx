import React from 'react'

export const AgregarListaForm = ({nuevoArt, setNuevoArt, AgregarArt}) => {
  return (
    <>
         {/*Agregar tareas*/ }
      <div className='row'>
        <div className='col'>
          <input
          value={nuevoArt} 
          onChange={(e) => setNuevoArt(e.target.value)}
          className='form-control form-control-md' placeholder='Ingresa el nombre de un Cantante'/>
        </div>
        <div className='col-auto'>
          <button
          onClick={AgregarArt} 
          className='btn btn-md btn-info'>Agregar</button>
        </div>
       </div>
      <br></br>
      </>
  )
}
export default AgregarListaForm;
