import React from "react";
import { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { InputData } from "./TaskTodo";

//create your first component
const Home = () => {
	const [content, setContent] = useState([''])

	return (
		<div className="container main-container p-1">
			<div className="fulldiv">
				<h1 className="mt-5 header text-center ps-4 pe-4">TODO LIST</h1>
				<InputData />
			</div>
		</div>
	);
};

export default Home;