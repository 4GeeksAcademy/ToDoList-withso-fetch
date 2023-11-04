import React from "react";
import { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { InputData } from "./InputData";

//create your first component
const Home = () => {
	const [content, setContent] = useState([''])
	

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">TODOS</h1>
				<ul>
					<InputData />
					<li> {content} </li>
					<li> hello </li>
					<li> hello </li>
					<li> hello </li>
					<li> hello </li>	
				</ul>
		</div>
	);
};

export default Home;