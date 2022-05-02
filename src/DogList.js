import React from "react";
import { useState } from "react/cjs/react.production.min";
import axios from "axios";
import { Link } from "react-router-dom";

const DOG_API = "http://localhost:5001/dogs";

async function DogList() {

  const dogList = await axios.get(DOG_API);
  const [dogs, setDogs] = useState(dogList.data);


  return (
    <div>
      {dogs.map((dog, i) => (
        <div key={dog.name}>
          <Link to={`/dogs/${dog.name}`}><h3>{dog.name}</h3></Link>
          <img style={{width: "150px"}} src={`../public/${dog.name}.jpg`} alt="dog pic"/>
        </div>
      ))}

    </div>
  );
}

export default DogList