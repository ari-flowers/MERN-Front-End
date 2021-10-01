import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [critters, setCritters] = useState([]);

  const getCritters = async () => {
    try {
      const critters = await fetch("http://localhost:9000/critters/");
      const parsedCritters = await critters.json();
      setCritters(parsedCritters);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCritters();
  }, []);




  return (
    <div className="App">
      <h1>Adorably fluffy critters!</h1>
      <table>
        <tbody>
        {critters && critters.map(critter=>
          <thead>
            <tr>
              <td>{critter._id}</td>
              <td>{critter.name}</td>
              <td>{critter.species}</td>
              <td>{critter.age}</td>
              <td>{critter.domesticated ? "True" : "False"}</td>
              <td>{critter.description}</td>
              <td>{critter.image}</td>
              <td>
                <ul>{critter.tags && critter.tags.map((tag) => <li>{tag}</li>)}</ul>
              </td>
            </tr>
          </thead>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
