import React from 'react'

export const ActualizarForm = ({actualizarArt, CambiarArt, ActualizarArt, CancelarActualizacion })=> {
  return (
    <>
       <div className='row'>
        <div className='col'>
          <input value={actualizarArt && actualizarArt.title} 
          onChange= {(e) => CambiarArt(e)}
          className='form-control form-control-md'/>
        </div>
        <div className='col-auto'>
          <button onClick={ActualizarArt} className='btn btn-md btn-outline-warning mr-20'>Actualizar</button>
        </div>
        <div className='col-auto'>
          <button onClick={CancelarActualizacion} className='btn btn-md btn-outline-danger'> Cancelar</button>
        </div>
         </div>
         <br></br>
         </>
  )
}
export default ActualizarForm;
