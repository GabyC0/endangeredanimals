const express = require('express');
const cors = require('cors');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 

const app = express();

const PORT = 5001;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});

//create the get request
app.get('/api/animals', cors(), async (req, res) => {
    //this is db name
    // const endangeredanimals = [

    //     { id: 1, commonname: 'Lisa', scientificname: 'Lee', numberinthewild: 200, conservationcode: 1,  },
    //     { id: 2, firstName: 'Eileen', lastName: 'Long' },
    //     { id: 3, firstName: 'Fariba', lastName: 'Dako' },
    //     { id: 4, firstName: 'Cristina', lastName: 'Rodriguez' },
    //     { id: 5, firstName: 'Andrea', lastName: 'Trejo' },
    // ];
    //table name??
    // res.json(STUDENTS);
    //table name
    try{
        const { rows: animals } = await db.query('SELECT * FROM animals');
        res.send(animals);
    } catch (e){
        return res.status(400).json({e});
    }
});

app.get('/api/sightings', cors(), async (req, res) => {
    try{
        const {rows: sightings} = await db.query('SELECT individuals.nickname, sightings.datetime, sightings.healthy, sightings.location FROM individuals INNER JOIN sightings ON individuals.id=sightings.individualid');
        res.send(sightings);
    } catch (e) {
        return res.status(400).json({e});
    }
});

//create the POST request
app.post('/api/animals', cors(), async (req, res) => {
    const newAnimal = { commonname: req.body.commonname, scientificname: req.body.scientificname, numberinthewild: req.body.numberinthewild, conservationcode: req.body.conservationcode }
    console.log([newAnimal.commonname, newAnimal.scientificname]);
    const result = await db.query(
        'INSERT INTO animals (commonname, scientificname, numberinthewild, conservationcode) VALUES($1, $2, $3, $4) RETURNING *',
        [newAnimal.commonname, newAnimal.scientificname, newAnimal.numberinthewild, newAnimal.conservationcode]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});