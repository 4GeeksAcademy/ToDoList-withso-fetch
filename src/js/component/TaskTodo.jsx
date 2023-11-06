import { object } from "prop-types";
import React from "react";
import { useState } from "react";

export const InputData = (content, SetNewTask) => {

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

    return (
        
        <div className="lista-tareas">
            <form className="form"   onSubmit ={ (event) => {
                setliContent(
                    [...liContent, 
                    {id: crypto.randomUUID(),
                    content: inputData}
                    ]
                );
                console.log(liContent);
                event.preventDefault();
                event.target.reset(); 
            }}action="full-form">
                <input className="input fs-5" 
                    onChange = { (event) => {
                    SetInputData(event.target.value);
                    }
                }
                    type ="text"
                    placeholder ="Whats needs to be done" />
                 <ul className="fs-5">
                 	{liContent.map(EachliContent =>(
                        <li className="item text-sm-left" key={ EachliContent.id }> { EachliContent.content }  
                        <div className="">
                            <i className="fa-solid fa-xmark" onClick={
                                (event)=>{
                                    const remainingTask = liContent.filter(newContentli => newContentli.id !== event.target);
                                    setliContent(remainingTask)
                                    console.log(event.target.value)
                                    console.log(remainingTask)
                                    }
                                }></i>
                        </div>
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