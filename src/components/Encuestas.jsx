import React from "react";

function Encuestas({ encuestas }) {
   return (
     <div>
       <h2>Lista de Encuestas</h2>
       <ul>
         {encuestas.map((encuesta) => (
           <li key={encuesta.id}>
             <p className="pregunta-opcion-texto">{encuesta.pregunta}</p>
             <ul>
               {encuesta.opciones.map((opcion) => (
                 <li key={opcion} className="pregunta-opcion-texto">{opcion}</li>
               ))}
             </ul>
           </li>
         ))}
       </ul>
     </div>
   );
 }

 export default Encuestas;

