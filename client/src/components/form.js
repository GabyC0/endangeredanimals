 import { useState } from "react";

const Form = (props) => {
    const [animal, setAnimal] = useState({
        commonname: "",
        scientificname: "",
        numberinthewild: "",
        conservationcode: ""
    });

//     //create functions that handle the event of the user typing into the form
    const handleCommNameChange = (event) => {
        const commonname = event.target.value;
        setAnimal((animal) => ({ ...animal, commonname }));

    }

    const handleSciNameChange = (event) => {
        const scientificname = event.target.value;
        setAnimal((animal) => ({ ...animal, scientificname }));
    }

    const handleNumChange = (event) => {
        const numberinthewild = event.target.value;
        setAnimal((animal) => ({ ...animal, numberinthewild }));
    }

    const handleCodeChange = (event) => {
        const conservationcode = event.target.value;
        setAnimal((animal) => ({ ...animal, conservationcode }));
    }

//     A function to handle the post request
    const postAnimal = (newAnimal) => {
        return fetch('http://localhost:5001/api/animals', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(newAnimal)
      }).then((response) => {
          return response.json()
      }).then((data) => {
        console.log("From the post ", data);
        props.addAnimal(data);
      
    });
    }

    const handleSubmit = (e) => {
        let emptyAnimal = {
            commonname: "",
            scientificname: "",
            numberinthewild: "",
            conservationcode: ""
        }
        e.preventDefault();
        setAnimal(animal);
        postAnimal(animal);
        //props.addAnimal(animal);
        setAnimal(emptyAnimal);
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>Common Name</label>
                <input
                    type="text"
                    id="add-common-name"
                    placeholder="Common Name"
                    required
                    value={animal.commonname}
                    onChange={handleCommNameChange}

                />
                <label>Scientific Name</label>
                <input
                    type="text"
                    id="add-scientific-name"
                    placeholder="Scientific Name"
                    required
                    value={animal.scientificname}
                    onChange={handleSciNameChange}
                />

                <label>Number in the wild:</label>
                <input
                    type="number"
                    id="add-number-in-wild"
                    placeholder="Num in wild"
                    required
                    value={animal.numberinthewild}
                    onChange={handleNumChange}
                />

                <label>Conservation Code</label>
                <input
                    type="number"
                    id="add-conservation-code"
                    placeholder="Conservation Code"
                    required
                    value={animal.conservationcode}
                    onChange={handleCodeChange}
                />
            </fieldset>
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;