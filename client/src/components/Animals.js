import { useState, useEffect } from "react";
import Form from "./Form";

function Animals() {

    const [animal, setAnimal] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/api/animals")
            .then((response) => response.json())
            .then(animal => {
                //setStudents((students[3]));
                setAnimal(animal);
            }
            )
        
    }, []);



const addAnimal = (newAnimal) => {
    //console.log(newStudent);
    //postStudent(newStudent);
    setAnimal((animal) => [...animal, newAnimal]);
}


return (
    <div className="animals">
        <h2> List of Animals </h2>
        <ul>
            {animal.map(animal =>
                <li key={animal.id}> {animal.commonname} {animal.scientificname} {animal.numberinthewild}</li>)}
        </ul>
        <Form addAnimal={addAnimal} />
    </div>
);
  }

export default Animals;