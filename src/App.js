import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck, faPen, faXmark
} from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
//Aqui se van a menejar los estados usestate
const [list, setList] = useState([
  {"id": 2, "title": "Ricardo Arjona", "status":false},
  {"id": 1, "title": "Vicente Fernandez", "status":false},
  {"id": 3, "title": "RBD Rebelde", "status":false},
]);

// list state

const [nuevoArt, setNuevoArt] = useState('');
const [actualizarArt, setActualizarArt] = useState('');

// agregar artista
const AgregarArt = () => {
  if (nuevoArt) {
    let num = list.length + 1;
    let nuevaEntreda = { id: num, title: nuevoArt, status: false}
    setList([...list, nuevaEntreda])
    setNuevoArt('');
  }
};
 // Eliminar artista
 const EliminarArt = (id) =>{
  let nuevoArts = list.filter( list => list.id !== id)
  setList(nuevoArts);
 };

 //marcar artista realizado
 const Realizado = (id) =>{
   let nuevoArt = list.map( list=>{
    if (list.id === id) {
      return ({...list, status: !list.status})
    }
    return list;
   })
   setList(nuevoArt)


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
      <br></br>
      {/* actualizar tareas*/}
      <div className='form'>
        <div className='col'>
          <input className='form-control form-control-lg'/>
        </div>
        <div className='col-auto'>
          <button className='btn btn-lg btn-success mr-20'>Actualizar</button>

        </div>
        <div className='col-auto'>
          <button className='btn btn-lg btn-warning'> Cancelar</button>
        </div>
         </div>
         <br></br>
         {/*Agregar tareas*/ }
      <div className='form'>
        <div className='col'>
          <input
          value={nuevoArt} 
          onChange={(e) => setNuevoArt(e.target.value)}
          className='form-control form-control-lg'/>
        </div>
        <div className='col-auto'>
          <button
          onClick={AgregarArt} 
          className='btn btn-lg btn-success'>Agregar</button>
        </div>

      </div>
      <br></br>

       {list && list.length ? '' : 'Upss no hay ninguna lista...'}

       {list && list 
       .sort((a, b) => a.id > b.id ? 1 : -1)
       .map( (list, index) => {
        return(
          <React.Fragment key={list.id}>

            <div className="col artBg">
              <div className={list.status ? 'done' : ''}>
              <span className="artNumber"> {index + 1}</span>
              <span className="artText">{list.title}</span>    
              </div>
              <div className="icons"> 
              <span title='completada / no completada'
                onClick= { (e) => Realizado(list.id)}>
                <FontAwesomeIcon icon={faCheck}/>
              </span>
              <span title='Editar'>
                <FontAwesomeIcon icon={faPen}/>
              </span>
              <span title='Eliminar' onClick={() => EliminarArt(list.id)}>
                <FontAwesomeIcon icon={faXmark}/>
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
