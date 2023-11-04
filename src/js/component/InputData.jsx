import React from "react";
import { useState } from "react";

export const InputData = (content, SetNewTask) => {
    const [inputData, SetInputData] = useState(['']);

    return (
        <div className="">
            <form action="full-form">
                <input onChange = { (event) => {
                    SetInputData(event.target.value);
                    console.log(inputData);
                    
                }}
                 type ="text"
                 placeholder ="Whats needs to be done" />
            </form>
        </div>
    );
}