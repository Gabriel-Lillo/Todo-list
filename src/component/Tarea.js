import React from 'react';
import '../App.css';

const Tarea = (props) => {

    const borrarTarea = () => {
        props.borrar(props.id)
    }

    return (
        <div>
            <nav className="navbar navbar-light bg-light border border-top-0 shadow">
                <div className="container">
                    <a className="navbar-brand">{props.tarea}</a>
                    <button className="btn btn-outline-warning border-0" onClick={borrarTarea}>x</button>
                </div>
            </nav>
        </div>
    )
}

export default Tarea;