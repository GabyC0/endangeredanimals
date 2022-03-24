import { useState, useEffect } from 'react';

function Sightings() {
    const [sightings, setSightings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/api/sightings')
            .then((response) => response.json())
            .then(sightings => {
                setSightings(sightings);
            })
    }, []);


    // const addSighting = (newSighting) => {
    //     setSightings((sighting) => [...sightings, newSighting]);
    // };

return (
    <div className="sightings">
        <h2>List of Sightings</h2>
        <ul>
            {sightings.map(sighting => 
                <li key={sighting.id}>Nickname: {sighting.nickname} Healthy: {sighting.healthy} Location:{sighting.location}</li>)
            }
        </ul>
    </div>
);

}

export default Sightings;