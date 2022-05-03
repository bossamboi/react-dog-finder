import React from "react";
import { Link } from "react-router-dom";

function Nav({ dogs }) {
	console.log(dogs);

	function renderLinks() {
		return dogs.isLoading ? (
			<div></div>
		) : (
			dogs.dogs.map((dog) => (
				<span key={dog.name}>
					<Link to={`/dogs/${dog.src}`}>{dog.name}</Link>
				</span>
			))
		);
	}
	return (
		<nav>
			<span>
				<Link to={`/dogs`}>All Dogs</Link>
			</span>
			{renderLinks()}
		</nav>
	);
}

export default Nav;
