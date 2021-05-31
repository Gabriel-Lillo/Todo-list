import { useState } from 'react';
import './App.css';
import Tarea from './component/Tarea';
import TareaForm from './component/TareaForm';

function App() {

  const [listaTareas, setListaTareas] = useState([]);

  const nuevaTarea = (tarea) => {
    setListaTareas([tarea,...listaTareas])

  }

  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter((e, index) => index !== id);
    setListaTareas(listaFiltrada);
  }



  return (
    <div className="container mt-5">
      <h1>Todo list</h1>
      <TareaForm
        nuevaTarea={nuevaTarea}
      />

      {
        listaTareas.map((e, index) => 
          <Tarea 
            tarea={e}
            borrar={borrar}
            id={index}
          />
        )
      }
    </div>
  );
}

export default App;