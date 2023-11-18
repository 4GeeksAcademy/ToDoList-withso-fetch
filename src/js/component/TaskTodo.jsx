import { object } from "prop-types";
import React, { useEffect } from "react";
import { useState } from "react";

const API__URL = 'https://playground.4geeks.com/apis/fake/todos/user/yoels'

export const InputData = () => {

    const [inputData, setInputData] = useState('');
    const [liContent, setliContent] = useState([]);
    const [isInputEmpty, setIsInputEmpty] = useState(false);

    const getList = async () => {
        try{
            const response = await fetch(API__URL);
            if(response.status !== 200){
                console.log("Ha ocurrido un error", error)
                return
            }
            if(response.status == 404){
                console.log('Debemos crear una lista')
                createList();
            }
            const body = await response.json();
            setliContent(body);
            console.log('La lista se visualiza correctamente')
            console.log(body);
        }catch(error){
            console.log(error);
        }
    }

    const createList = async () => {
        try {
            const response = await fetch(API__URL, {
                method: "POST",
                body: JSON.stringify([]),
                headers: { 'Content-type': 'application/json' }
            });
            getList();
        } catch (error) {
            console.log(error);
        }
    }

    const updateList = async () =>{
        try{
            const response = await fetch(API__URL, {
                method: "PUT",
                body: JSON.stringify(liContent),
                headers: { 'Content-type': 'application/json' }
            });
            console.log(response.body);
            getList();
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getList();
    }, [])

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
            <button className="btn btn-warning" onClick={updateList}> add task </button>
            <form className="form"   onSubmit ={ (event) => {
                event.preventDefault();
                if(inputData.trim() === ""){
                    alert('please enter a task')
                    setIsInputEmpty(true);
                }else{
                    setliContent(
                        [...liContent, 
                        {
                        label: inputData,
                        done: false},
                        ]);
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
                        <li className="item text-sm-left" key={ EachliContent.id }> { EachliContent.label }  
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