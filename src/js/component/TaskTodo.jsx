import { object } from "prop-types";
import React from "react";
import { useState } from "react";

export const InputData = () => {

    const [inputData, setInputData] = useState('');
    const [liContent, setliContent] = useState([]);
    const [isInputEmpty, setIsInputEmpty] = useState(false);

    let arrAmmount = liContent.length;

    function taskFilter () {
        if(arrAmmount <= 0){
            return "There is no active task. Please add one";
        }
        if(arrAmmount == 1){
            return `${arrAmmount} active task`;
        }
        if(arrAmmount >= 1){
            return `${arrAmmount} active tasks`;
        }
    }

    return (
        
        <div className="lista-tareas">
            <form className="form"   onSubmit ={ (event) => {
                event.preventDefault();
                if(inputData.trim() === ""){
                    alert('please enter a task')
                    setIsInputEmpty(true);
                }else{
                    setliContent(
                        [...liContent, 
                        {id: crypto.randomUUID(),
                        content: inputData}
                        ]);
                    console.log(event.target)
                    setIsInputEmpty(false);
                    event.target.reset();
                    setInputData("");
                }  
            }}
            action="full-form">
                <input className={`input fs-5 ${isInputEmpty ? "empty" : ""}`}
                    onChange = { (event) => {
                    setInputData(event.target.value);
                    setIsInputEmpty(false);
                    }
                }
                    type ="text"
                    placeholder ="Whats needs to be done" />
                 <ul className="fs-5">
                 	{liContent.map(EachliContent =>(
                        <li className="item text-sm-left" key={ EachliContent.id }> { EachliContent.content }  
                        <div className="icon-marker">
                            <i className="fa-solid fa-xmark" onClick={
                                (event)=>{
                                    const remainingTask = liContent.filter(newContentli => newContentli.id !== EachliContent.id );
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