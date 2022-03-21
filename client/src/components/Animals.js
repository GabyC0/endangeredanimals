import { useState, useEffect } from "react";
//import Form from "./form";

function Animals() {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/api/animals")
            .then((response) => response.json())
            .then(animals => {
                //setStudents((students[3]));
                setAnimals(animals);
            }
            )
        
    }, []);



// const addStudent = (newStudent) => {
//     //console.log(newStudent);
//     //postStudent(newStudent);
//     setStudents((students) => [...students, newStudent]);
// }


return (
    <div className="animals">
        <h2> List of Animals </h2>
        <ul>
            {animals.map(animals =>
                <li key={animals.id}> {animals.commonname} {animals.scientificname} {animals.numberinthewild}</li>)}
        </ul>
        {/* <Form addAnimals={addAnimals} /> */}
    </div>
);
  }

export default Animals;