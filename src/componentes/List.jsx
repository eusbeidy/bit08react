import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck, faPen, faXmark
} from '@fortawesome/free-solid-svg-icons'

export const List = ({ list,Realizado, setActualizarArt, EliminarArt }) => {
  return (
    <>
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
               {list.status ? null : (
               <span title='Editar'
                 onClick={ () => setActualizarArt({
                   id: list.id, 
                   title: list.title,
                   status: list.status ? true : false
                 })}
                 >
                 <FontAwesomeIcon icon={faPen}/>
               </span>
               )}
               <span title='Eliminar' onClick={() => EliminarArt(list.id)}>
                 <FontAwesomeIcon icon={faXmark}/>
               </span>
                 </div>
             </div>
             
           </React.Fragment>
         )
        })
    }
    </>
  )
}
export default List;