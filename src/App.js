import {useState} from 'react';
import AgregarListaForm from './componentes/AgregarListaForm'
import ActualizarForm from './componentes/ActualizarForm'
import List from './componentes/List'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
//Aqui se van a menejar los estados usestate
const [list, setList] = useState([
  {"id": 2, "title": "Ricardo Arjona", "status":false},
  {"id": 1, "title": "Vicente Fernández", "status":false},
  {"id": 3, "title": "HA*Ash", "status":false},
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
  let nuevoArt = list.filter( list => list.id !== id)
  setList(nuevoArt);
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
  setActualizarArt('');
  


 };

 // cambiar la tarea y actualizarla 

 const CambiarArt = (e) =>{
  let nuevaEntreda= { 
    id: actualizarArt.id,
    title: e.target.value,
    status: actualizarArt.status ? true : false
  }
  setActualizarArt(nuevaEntreda);

 };

 // Actualizar Artista
 const ActualizarArt = () =>{
  let filtrar = [...list].filter(list => list.id !== actualizarArt.id);
  let actualizar = [...filtrar, actualizarArt]
  setList(actualizar);
  setActualizarArt('');
 };

  return (
    <>
     <div className='container App'>
      <br></br>
      <h1>Lista de Cantantes Favoritos</h1>
      <br></br>

      {/* actualizar tareas*/}

      {actualizarArt && actualizarArt ? (
        <ActualizarForm
        actualizarArt={actualizarArt}
        CambiarArt={CambiarArt}
        ActualizarArt={ActualizarArt}
        CancelarActualizacion ={CancelarActualizacion}
        />
      ) : (
        <AgregarListaForm
        nuevoArt= {nuevoArt}
        setNuevoArt= {setNuevoArt}
        AgregarArt={AgregarArt}
        />
      )}

       {list && list.length ? '' : 'Upss no hay ninguna lista...'}
       <List
       list={list}
       Realizado={Realizado}
       setActualizarArt={setActualizarArt}
       EliminarArt={EliminarArt}

       />

     </div>
    </>
  );
}

export default App;
