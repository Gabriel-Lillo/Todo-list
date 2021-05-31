import React, { useState } from 'react';
import '../App.css';

const TareaForm = (props) => {

    const [inputText, setInputText] = useState("");
    const [validacion, setValidacion] = useState(true);

    const manejarInput = (event) => {
        setInputText(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        if (inputText.trim() !== "") {
            props.nuevaTarea(inputText);
            setInputText("");
            setValidacion(true);
        } else {
            setValidacion(false);
        }

    }

    return (
        <div>
            <li className="list-group-item">
                <form className="form" onSubmit={submit}>
                    <div class="alert alert-primary p-2" role="alert">Añadir tarea</div>
                    <input type="text" className="form-control" value={inputText} onChange={manejarInput} />
                </form>
            </li>
            {
                !validacion &&
                  <div class="alert alert-danger text-center" role="alert">Añada una tarea!</div>
            }
        </div>
    )
}

export default TareaForm;