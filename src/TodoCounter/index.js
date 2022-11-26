import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'

//const estilos = {
//    color: 'red',
//    backgroundColor: 'yellow'
//};
// estilos en línea con style={} en el elemento
function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        <React.Fragment>
            {(completedTodos>=1 && completedTodos!==totalTodos) &&  <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>}
            {totalTodos<1 &&  <h2 className="TodoCounter">No hay TODOs</h2>}
            {(completedTodos===totalTodos && totalTodos !== 0) && <h2 className="TodoCounter">Has completado todos los TODOs</h2>}
            {(completedTodos===0 && totalTodos !== 0) && <h2 className="TodoCounter">No has completado ningún TODO</h2>}
        </React.Fragment>
    )
}

export { TodoCounter };