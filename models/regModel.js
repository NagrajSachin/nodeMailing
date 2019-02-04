const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username :
    {
        type : String,
        required : true,
        unique : true
    },
    email : 
    {
        type : String,
        required : true
    },
    password : 
    {
        type : String,
        required : true
    },
    phone : 
    {
        type : Number,
        required : true
    }
},
    {
        timestamps : true    
});

const UserSchema = mongoose.model('user',userSchema);

module.exports = UserSchema;