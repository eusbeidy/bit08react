import React from 'react'

export const ActualizarForm = ({actualizarArt, CambiarArt, ActualizarArt, CancelarActualizacion })=> {
  return (
    <>
       <div className='form'>
        <div className='col'>
          <input value={actualizarArt && actualizarArt.title} 
          onChange= {(e) => CambiarArt(e)}
          className='form-control form-control-lg'/>
        </div>
        <div className='col-auto'>
         
          <button
          onClick={ActualizarArt} 
          className='btn btn-lg btn-success mr-20'>Actualizar</button>

        </div>
        <div className='col-auto'>
          <button 
          onClick={CancelarActualizacion}
          className='btn btn-lg btn-warning'> Cancelar</button>
        </div>
         </div>
         <br></br>
         </>
  )
}
export default ActualizarForm;
