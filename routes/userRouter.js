const express = require('express');
const bodyParser = require('body-parser');
const userRouter = express.Router();

const UserSchema = require('../models/regModel');
const email = require('../mailer/nodemailer');

userRouter.use(bodyParser.json());

userRouter.route('/')
.get((req,res,next)=>{
    UserSchema.find({})
    .then((data)=>{
        res.statusCode = 200;
        res.setHeader('content-type','application/json');
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    })
})
.post((req,res,next)=>{
    UserSchema.create(req.body)
    .then((data)=>{
        email();
        res.statusCode = 200;
        res.setHeader('content-type','application/json');
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    });
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end("Not Supported");
})
.delete((req,res,next)=>{
    UserSchema.find({}).remove()
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('content-type','application/json');
        res.json(resp);
    }).catch((err)=>{
        console.log(err)
    });
});

module.exports = userRouter;