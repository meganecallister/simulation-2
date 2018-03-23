require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');

const app = express();

app.use(bodyParser.json());

massive( process.env.DATABASE_URL)
    .then( db => {
        console.log('Connected to db!');
        
    .catch( err => console.log(err));
    })

// app.get(, );
// app.post(, );
// app.put(, );
// app.delete(, );

const port = 3003;
app.listen(port, () => console.log("Listening on port " + port));