const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

const database = require('./config/database.js').mongoURI;

mongoose.connect(database, { useNewUrlParser: true})
    .then( ()=>{
        console.log("Connected to MLab");
    })
    .catch( (error)=>{
        console.log(error);
    });

const port = 3000;

app.listen(port, ()=>{
    console.log("Server started at " + port);
});

