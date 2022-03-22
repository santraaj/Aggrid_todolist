import React, { useState } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Todolist() {
  const [todo, setTodo] = useState({description: '', date: '', priority:''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  }

  const columns = [
    { headerName: 'Date', field: 'date' },
    { headerName: 'Description', field: 'description' },
    { headerName: 'Priority', field: 'priority' }
  ]

  return (
    <div className="App">
      <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description}/>
      <input type="text" onChange={inputChanged} placeholder="Date" name="date" value={todo.date}/>
      <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority}/>
      <button onClick={addTodo}>Add</button>
      <div
        className="ag-theme-material"
        style={{
        height: '700px',
        width: '80%',
        margin: 'auto'}}
      >
        <AgGridReact
          columnDefs={columns}
          rowData={todos}
        >  
        </AgGridReact>
      </div> 
    </div>
  );
};

export default Todolist;