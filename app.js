const mongoose = require('mongoose')
const usersRoutes = require('./routes/User.routes');
const express = require('express');
const bodyParser = require("body-parser");

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

mongoose.connect('mongodb://localhost:27017/VotingApp').then(()=>{
    console.log('connected to database successfully')
}).catch(() =>{
    console.log('failed to connect to database');
})

app.use('/Users',usersRoutes);


module.exports = app;
