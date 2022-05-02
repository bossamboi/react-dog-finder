
import React from "react";
import './App.css';
import DogList from './DogList';
import Dog from './Dog';
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>To the Dogs</h1>
      <BrowserRouter>
        <Routes >
          {/* <Route path="/" element={<Navigate to="/dogs" />} /> */}
          <Route path="/dogs" element={<DogList />} />
          <Route path="/dogs/:name" element={<Dog />} />
          {/* <Route path="*" element={<Navigate to="/dogs" />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
