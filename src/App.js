import React, { useState } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import axios from "axios";
import "./App.css";
import DogList from "./DogList";
import Dog from "./Dog";
import Nav from "./Nav";

const DOG_API = "http://localhost:5001/dogs";

function App() {
	const [dogs, setDogs] = useState({ dogs: null, isLoading: true });

	async function getDogs() {
		const dogList = await axios.get(DOG_API);
		setDogs({ dogs: dogList.data, isLoading: false });
	}

	if (dogs.isLoading) {
		getDogs();
	}

	function getDogInfo(src) {
		const result = dogs.dogs.filter((dog) => dog.src === src);
		return result[0];
	}

	return (
		<div className="App">
			<h1>To the Dogs</h1>
			<BrowserRouter>
				<Nav dogs={dogs} />
				<Routes>
					<Route path="/" element={<Navigate to="/dogs" />} />
					<Route path="/dogs" element={<DogList dogs={dogs} />} />
					<Route path="/dogs/:src" element={<Dog getDogInfo={getDogInfo} />} />
					<Route path="*" element={<Navigate to="/dogs" />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
