import React from "react";
import './ViewedFilter.css'
import { TodoContext } from "../TodoContext";



function ViewedFilter(){
    const { activePage, setNewActivePage } = React.useContext(TodoContext)
    const onSelectPage = () => {
        if(activePage === 'Por hacer'){
            setNewActivePage('Hecho')
        } else {
            setNewActivePage('Por hacer')
        }
    }
    return (
        <React.Fragment>
            <div className="filter">
                <button onClick={onSelectPage} className={`${activePage === 'Por hacer' && 'active'}`} >Por hacer{activePage==='Por hacer' && <hr />}</button>
                <button onClick={onSelectPage} className={`${activePage === 'Hecho' && 'active'}`} >Hecho{activePage==='Hecho' && <hr />}</button>
            </div>
        </React.Fragment>
    )
}


export { ViewedFilter }