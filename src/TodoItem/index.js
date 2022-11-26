import React from "react";
import './TodoItem.css'
function TodoItem(props) {
    //const onComplete = () => {
    //    Swal.fire('Buen Trabajo', 'Has completado el todo ' + props.text, 'success')
    //};
    //const onDelete = () => {
    //    Swal.fire('Borraste el todo', 'Has borrado el todo ' + props.text, 'error')
    //};
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}>
                <i className="fa-solid fa-check"></i>
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`} >
                {props.text}
            </p>
            <span className="Icon Icon-delete" onClick={props.onDelete}>
                <i className="fa-solid fa-xmark"></i>
            </span>
        </li>
    )
}
export { TodoItem };
