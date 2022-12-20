import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import NavBar from './components/NavBar';


import NovaTarefa from './components/NovaTarefa.jsx';
import { Tarefas } from './components/Tarefa';


import { Outlet } from 'react-router-dom';

function App() {
  
  // const texto = prompt ("Digite seu nome")

  return (
    <div className="App">
      <NavBar />
      <div className='container'>
      <Outlet />
      {/* <Tarefas /> */}


      
      {/* <Header /> */}
      {/* <NovaTarefa /> */}
      {/* {/* <Form props = {texto} /> */}

      </div>
    </div>
  );

}

export default App;
