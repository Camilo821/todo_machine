import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm'
import { Modal } from '../Modal';
import { ViewedFilter } from '../ViewedFilter';
import { TodoHeader } from '../TodoHeader';
import { TodoSearch } from '../TodoSearch';
import { TodoCounter } from '../TodoCounter';
import { useTodos } from './useTodos'
//const Swal = require('sweetalert2')
//const defaultTodos = [
//  { text:"Cortar cebolla", completed: false },
//  { text:"Tomar el curso de intro a React", completed: true },
//  { text:"Llorar con la llorona", completed: true },
//  { text:"Ver los partidos del mundial", completed: false},
//  { text:"Terminar el curso de react", completed: false}
//];


function App() {
  const {addTodo, activePage, setNewActivePage, error, loading, searchedTodos, completeTodos, deleteTodo, openModal, setOpenModal, totalTodos, completedTodos, searchValue, setSearchValue} = useTodos()
//console.log('render (antes)')
//React.useEffect(() => {
//  console.log('use effect')
//}, [totalTodos])
//console.log('render (luego)')
return(
  <React.Fragment>
    <TodoHeader>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    </TodoHeader>
    <ViewedFilter activePage={activePage} setNewActivePage={setNewActivePage} />
    <TodoList >
      {error && <p className='info'>Desesperate, hubo un error :(</p>}
      {loading && <p className='info'>Estamos cargando, no desesperes</p>}
      {(!loading && !searchedTodos.length) && <p className='info'>Crea tu primer TODO</p>}
      {searchedTodos.map(todo => (
        <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          important={todo.important}
          onComplete={() => completeTodos(todo.text)}
          onDelete={() => deleteTodo(todo.text)}/>
      ))}
    </TodoList>
    {!!openModal && (
    <Modal>
      <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} ></TodoForm>
    </Modal>)}
    <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>
  </React.Fragment>);
}
// props.nombre de la propiedad o props.children para poner el hijo en el render
export default App;
