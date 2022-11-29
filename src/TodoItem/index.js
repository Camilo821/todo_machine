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
        <li className={`TodoItem ${props.important === "Low" && 'low'} ${props.important === "Normal" && 'normal'} ${props.important === "Important" && 'important'} ${props.important === "Urgent" && 'urgent'}`}>
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}>
                {/*<i className="fa-solid fa-check check" style={{vissibility: `${props.completed && 'vissible'} ${!props.completed && 'hidden'}`}}></i>*/}
                {!props.completed && <i className="fa-solid fa-check check" style={{visibility: "hidden"}}></i>}
                {props.completed && <i className="fa-solid fa-check check" style={{visibility: "vissible"}}></i>}
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
