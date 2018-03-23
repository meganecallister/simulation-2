require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');

const app = express();

app.use(bodyParser.json());

const port = 3003;

massive( process.env.DATABASE_URL)
    .then( db => {
        console.log('Connected to db!');
        app.set('db', db),
        app.get('db').init.seed().then( res => {
            console.log(res);
        }).catch( err => console.log(err)),
        app.listen(port, () => console.log("Listening on port " + port));
    })

// app.get(, );
// app.post(, );
// app.put(, );
// app.delete(, );


