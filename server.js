const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const items = require('./routes/api/items.js');

//intialize app
const app = express();

app.use(bodyParser.json());

const database = require('./config/database.js').mongoURI;

//MLab connection
mongoose.connect(database, { useNewUrlParser: true})
    .then( ()=>{
        console.log("Connected to MLab");
    })
    .catch( (error)=>{
        console.log(error);
    });

app.use('/api/items', items);

const port = 5000;

app.listen(port, ()=>{
    console.log("Server started at " + port);
});

