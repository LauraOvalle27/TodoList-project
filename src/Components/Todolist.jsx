import { useState } from "react";
import React from "react";


function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setnewTask] = useState('');
  
    function handleInputChange(event){
        setnewTask(event.target.value);
    }

    function handleAddTask(){
        if(newTask.trim() !== ""){
            setTasks([...tasks, newTask]);
            setnewTask("");
        }
        
    }
    
    function handleDeleteTask(index) {
        const updatedTask = tasks.filter((_, i)=> i !== index);
        setTasks(updatedTask);
      
    }

    function handleMoveTaskUp (index){
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index -1]] = 
            [updatedTask[index -1], updatedTask[index]];
            setTasks(updatedTask);
        }

    }

    function handleMoveTaskDown (index){
        if(index < tasks.length - 1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index +1]] = 
            [updatedTask[index +1], updatedTask[index]];
            setTasks(updatedTask);
        }

    }

    
  
    return (
        <div className="to-do-list">  

            <h1>Lista de Tareas</h1>
              <div className="tasks">
              <input
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Nueva tarea"
              />

              <button 
                className="add-button"
                onClick={handleAddTask}>
                Agregar Tarea
              </button>

              </div>
              <div className="show-tasks">
                <ol>
                {tasks.map((task, index) => (
                  <li key={index}>
                    <span className="text">{task}</span>
                    
                    <button 
                    className="delete-button"
                    onClick={() => handleDeleteTask(index)}>
                        Borrar
                    </button>

                    <button 
                    className="move-button"
                    onClick={() => handleMoveTaskUp(index)}>
                        👆
                    </button>

                    <button 
                    className="move-button"
                    onClick={() => handleMoveTaskDown(index)}>
                        👇
                    </button>
                  </li>
                ))}
              
              </ol>
              </div>
              </div>);
  }

  
  
  export default TodoList;
