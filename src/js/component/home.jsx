import React from "react";
import { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { InputData } from "./TaskTodo";

//create your first component
const Home = () => {
	const [content, setContent] = useState([''])
	console.log(content);

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">TODOS</h1>
				<ul>
					<InputData />
				</ul>
		</div>
	);
};

export default Home;