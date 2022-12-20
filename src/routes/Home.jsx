import React from 'react'
import { useState } from "react";
import axios from "axios";


    



const Home = () => {

  const [tarefas, setTarefas] = useState([]);
  
    function getTasks() {
      axios
        .get("https://servidor-oba-oba.onrender.com/Hamburgueres")
        .then((result) => {
          console.log(result);
          setTarefas(result.data);
        })
        .catch((erro) => {
          console.log(erro);
        });
    }
    function postTasks() {
      axios
        .post("https://servidor-oba-oba.onrender.com/Hamburgueres",{"nome" : "X-Veggie"})
        .get("https://servidor-oba-oba.onrender.com/Hamburgueres")
        .then((result) => {
          console.log(result);
          setTarefas(result.data);
        })
        .catch((erro) => {
          console.log(erro);
        });
    }
    function deleteTasks() {
      const id = prompt("Qual id deseja deletar?")
      axios
        .delete("https://servidor-oba-oba.onrender.com/Hamburgueres/" + id)
        .get("https://servidor-oba-oba.onrender.com/Hamburgueres")
        .then((result) => {
          console.log(result);
          setTarefas(result.data);
        })
        .catch((erro) => {
          console.log(erro);
        });
    }
    return (
      <div className="info">
        <h1 className='titulo'>Consultas ao Banco de Dados</h1>
        <button className="btn-buscar btn" onClick={getTasks}>Buscar Produtos</button>
        <button className="btn-lancar btn" onClick={postTasks}>Lançar Produtos </button>
        <button className="btn-delete btn" onClick={deleteTasks}>Deletar Produtos </button>
  
        <ul className="produtos">
          <li className="subTitulo">Produtos</li>
          {tarefas.map((tarefa) => (
            <li>{tarefa.nome}</li>
          ))}
        </ul>
        <ul className="preco">
          <li className="subTitulo">Preços</li>
          {tarefas.map((tarefa) => (
            <li>{tarefa.preco}</li>
          ))}
        </ul>
      </div>
    );
  }

export default Home
