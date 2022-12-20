
// 

import { useState } from "react";


export default function NovaTarefa(){

  // ROOKS logo abaixo
  const [titulo,setTitulo]= useState("");

  //FIM DO HOOKS
  return(
    <div>
      <h1>{titulo}</h1>
      <input type="text" onChange={(e) => setTitulo(e.target.value)}/>
    </div>
  )
}