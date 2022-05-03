import React from "react";
import { useParams } from "react-router-dom";

function Dog({ getDogInfo }) {
	const params = useParams();
	// {src: "whiskey"}

	const currDog = getDogInfo(params.src);

	return (
		<div>
			<h3>{currDog.name}</h3>
			<p>Age: {currDog.age}</p>
			<h4>Facts:</h4>
			<ul>
				{currDog.facts.map((fact, i) => (
					<li key={i}>{fact}</li>
				))}
			</ul>
		</div>
	);
}

export default Dog;
