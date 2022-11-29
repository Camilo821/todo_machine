import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'
function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [newImportantValue, setImportantValue] =  React.useState('Normal')
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)
    const onCancel = () => {
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue, newImportantValue);
        setOpenModal(false);
    };
    const onImportantChange = (event) => {
      setImportantValue(event.target.value)
    }
    return(
        <form onSubmit={onSubmit} >
      <label>Escribe tu nuevo To Do</label>
      <textarea
        value = {newTodoValue}
        onChange = {onChange}
        placeholder = "Escribe una nueva tarea"
      />
      <select name="importancia" className='form-input' value={newImportantValue} onChange={onImportantChange}>
        <option value={"Low"} selected>Poco Importante</option>
        <option value={"Normal"}>Normal</option>
        <option value={"Important"}>Importante</option>
        <option value={"Urgent"}>Urgente</option>  
      </select>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick = {onCancel}
        >
          Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type= "submit"
        >
          Añadir
          </button>
      </div>
    </form>
    );
}

export { TodoForm }