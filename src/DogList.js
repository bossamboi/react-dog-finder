import React from "react";

import { Link } from "react-router-dom";
// import * as img from "../public";

function DogList({ dogs }) {
  function renderHTML() {
    return dogs.isLoading ? (
      <i>Loading...</i>
    ) : (
      <div>
        {dogs.dogs.map((dog, i) => (
          <div key={dog.src}>
            <Link to={`/dogs/${dog.src}`}>
              <h3>{dog.name}</h3>
            </Link>
            <img
              style={{ width: "150px" }}
              src={`/${dog.src}.jpg`}
              alt="dog pic"
            />
          </div>
        ))}
      </div>
    );
  }

  return <div>{renderHTML()}</div>;
}

export default DogList;
