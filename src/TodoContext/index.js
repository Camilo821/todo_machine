import React from 'react'
import { useLocalStorage } from './useLocalStorage';
const Swal = require('sweetalert2')
const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        error,
        item: todos,
        saveItem: saveTodos,
        loading} = useLocalStorage('TODOS_V1', []);
      const [openModal, setOpenModal] = React.useState(false)
      const [searchValue, setSearchValue] = React.useState('');
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (!searchValue.length >= 1 ){
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
        
      }
    
      
      const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        //newTodos[todoIndex] = {
        //  text: todos[todoIndex].text,
        //  completed: true,
        //}
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed
        //Swal.fire('Buen Trabajo', 'Has completado el todo ' + text, 'success')
        if (newTodos[todoIndex].completed){
          Swal.fire('Buen Trabajo', 'Has completado el todo ' + text, 'success')
        }
        saveTodos(newTodos);
      }
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text: text
        })
        saveTodos(newTodos);
      }
    return(
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            addTodo,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }