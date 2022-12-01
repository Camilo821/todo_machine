import React from 'react'
import { useLocalStorage } from './useLocalStorage';
const Swal = require('sweetalert2')

function useTodos(props){
    const {
        error,
        item: todos,
        saveItem: saveTodos,
        loading} = useLocalStorage('TODOS_V2', []);
      const [openModal, setOpenModal] = React.useState(false)
      const [searchValue, setSearchValue] = React.useState('');
      const [activePage, setNewActivePage] = React.useState('Por hacer');
      const totalTodos = todos.length;
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const completed = todos.filter(todo => !todo.completed);
      const unCompletedTodos = todos.filter(todo => !!todo.completed)
      let filteredTodos = [];
      let searchedTodos = [];
      if (activePage === 'Por hacer'){
        filteredTodos = completed
      }else if(activePage === 'Hecho'){
        filteredTodos = unCompletedTodos
      }
      if (!searchValue.length >=  1){
        searchedTodos = filteredTodos
      }else{
        searchedTodos = filteredTodos.filter(todo => {
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
      const addTodo = (text, important) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text: text,
          important: important
        })
        saveTodos(newTodos);
      }
    return(
        {
            error,
            activePage,
            setNewActivePage,
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
        }
    );
}

export { useTodos }