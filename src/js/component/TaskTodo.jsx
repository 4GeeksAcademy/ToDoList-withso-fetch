import { object } from "prop-types";
import React from "react";
import { useState } from "react";

export const InputData = (content, SetNewTask) => {
    let nextId = crypto.randomUUID();
    const [inputData, SetInputData] = useState('');
    const [liContent, setliContent] = useState([])
    let arrAmmount = liContent.length;
    function taskFilter () {
        if(arrAmmount <= 0){
            return "There is no active task. Please add one";
        }
        if(arrAmmount >= 1){
            return `${arrAmmount} active task`;
        }
    }
    const remainingTask = liContent.filter(task => task.id ==! liContent.id)
    console.log(arrAmmount);

    return (
        <div className="lista-tareas">
            <form className="form"   onSubmit ={ (event) => {
                setliContent(
                    [...liContent, 
                    {id: crypto.randomUUID(), 
                    content: inputData}
                    ]
                );
                event.preventDefault();
                event.target.reset(); 
                console.log(inputData);
            }}action="full-form">
                <input className="input fs-5" onChange = { (event) => {
                    SetInputData(event.target.value);
                    console.log(inputData);
                    }
                }
                 type ="text"
                 placeholder ="Whats needs to be done" />
                 <ul className="fs-5">
                 	{liContent.map(liContent =>(
                        <li className="item text-sm-left" key={ liContent.id }> { liContent.content }  
                        </li> 
                            )
                        )
                    }
                    <div className="footer"> {taskFilter()}</div>
                </ul>
            </form>
        </div>
    );
}