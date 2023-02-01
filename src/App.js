import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
//Aqui se van a menejar los estados usestate
const [list, setList] = useState([
  {"id": 1, "title": "Art", "status":false},
  {"id": 2, "title": "Art", "status":false}
]);

// list state

const [nuevoArt, useNuevoArt] = useState('');
const [actualizarArt, useActualizarArt] = useState('');

// agregar artista
const AgregarArt = () => {
  // 
};
 // Eliminar artista
 const EliminarArt = (id) =>{
  //
 };

 //marcar artista realizado
 const Realizado = (id) =>{

 };
 // cancelar actualizacion
 const CancelarActualizacion = () => {

 };

 // cambiar la tarea y actualizarla 

 const CambiarArt = (e) =>{

 };

 // Actualizar Artista
 const ActualizarArt = (e) =>{

 };

  return (
    <>
     <div className='container App'>
      <br></br>
      <h1>Lista de Artistas Favoritos.</h1>

       {list && list.length ? '' : 'no gracias...'}

       {list && list 
       .map( (list, index) => {
        return(
          <React.Fragment key={list.id}>

            <div className="col artBg">
              <div className={list.status ? 'done' : ''}>
              <span className="artNumber"> {index + 1}</span>
              <span className="artText">{list.title}</span>    
              </div>
              <div className="icons"> 
              <span><FontAwesomeIcon icon={faCircleCheck}/>
              </span>
              <span>
                <FontAwesomeIcon icon={faPen}/>
              </span>
              <span>
                <FontAwesomeIcon icon={faTrashCan}/>
              </span>
                </div>
            </div>
            
          </React.Fragment>
        )
       })
       }

     </div>
    </>
  );
}

export default App;
