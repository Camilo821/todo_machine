import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm'
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal'
import { ViewedFilter } from '../ViewedFilter';
import './App.css'
function AppUI(){
  const {error, loading, searchedTodos, completeTodos, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext)
  return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <ViewedFilter />
      <TodoList >
        {/*{error && <p className='info'>Desesperate, hubo un error :(</p>}
        {loading && <p className='info'>Estamos cargando, no desesperes</p>}
        {(!loading && !searchedTodos.length) && <p className='info'>Crea tu primer TODO</p>}*/}
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
        <TodoForm></TodoForm>
      </Modal>)}
      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>
    </React.Fragment>);
}

export { AppUI };