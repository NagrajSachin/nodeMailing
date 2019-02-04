const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); 

const hostname = 'localhost';
const port = 3000;

const UserSchema = require('./models/regModel');
const userRouter = require('./routes/userRouter');

const app = express();
const url = "mongodb://localhost:27017/log";
const connect = mongoose.connect(url);

app.use(morgan('dev'));

connect.then((db)=>{
    console.log("connected to the database");
},(err) => {
    console.log(err);
});

app.use('/user',userRouter);

app.listen(port,hostname, ()=>{
    console.log("server running on port" + hostname + " " + port);
})