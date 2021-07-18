import { isEmpty } from "lodash"
import React, { useState } from "react"
import shortid from "shortid"
// imr

function App() {
  //use
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    //Despues de ejecutar lodash
    if (isEmpty(task)) {
      console.log("Task empty");
      return;
    }

    const newTask = {
      id: shortid.generate(),
      name: task
    }

    setTasks([...tasks, newTask]) //agregando una nueva tarea
    //console.log("Ok");
    setTask("")
  };

  return (
    <div className="container mt-5">
      <h1>Tareas</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {
              tasks.map((task) => (
                <li key="{task.id}" className="list-group-item">
                  <span className="lead">{task.name}</span>
                  
                  <button className="btn btn-danger btn-sm float-right mx-2">
                    Eliminar
                  </button>

                  <button className="btn btn-warning btn-sm float-right">
                    Editar
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>

          <form onSubmit={addTask}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese la tarea..."
              onChange={(e) => {setTask(e.target.value)}} //Para establecerlo
              value={task} //para leerlo y dejarlo en blanco
            />
            <button className="btn btn-dark btn-block" type="submit">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
