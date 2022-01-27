const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name:String,
    email: {
        type: String,
        unique: true,
    },
    age: Number,
    
    password: String
    //if we only need the type and not a required we can avoid the {}
}) 


const User = mongoose.model('users', usersSchema)
//turning the schema into a collection in the database

module.exports = User