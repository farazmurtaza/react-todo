const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

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

if(process.env.NODE_ENV === 'production'){

    app.use(express.static('client/build'));
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, '/client', '/build', '/index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log("Server started at " + port);
});

