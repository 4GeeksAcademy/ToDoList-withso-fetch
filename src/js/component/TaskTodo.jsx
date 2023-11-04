import React from "react";
import { useState } from "react";

export const InputData = (content, SetNewTask) => {
    const [inputData, SetInputData] = useState('');
    const [liContent, setliContent] = useState(['']);

    return (
        <div className="">
            <form onSubmit ={ (event) => {
                setliContent(inputData);
                event.preventDefault();
                console.log(liContent);
            }} action="full-form">
                <input onChange = { (event) => {
                    SetInputData(event.target.value);
                    console.log(inputData);
                }}
                 type ="text"
                 placeholder ="Whats needs to be done" />
                 	<li> {liContent} </li>
					<li> {liContent} </li>
					<li> {liContent} </li>
					<li> {liContent} </li>	
            </form>
        </div>
    );
}