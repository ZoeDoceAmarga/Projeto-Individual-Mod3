import { useState } from "react";
import axios from "axios";
import './Tarefa.css';

export function Tarefas() {
  const [tarefas, setTarefas] = useState([]);

  function getTasks() {
    axios
      .get("http://localhost:3200/produtos")
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
      .post("http://localhost:3200/produtos",{"nome" : "Programar"})
      .get("http://localhost:3200/produtos")
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
      .delete("http://localhost:3200/produtos/" + id)
      .get("http://localhost:3200/produtos")
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






