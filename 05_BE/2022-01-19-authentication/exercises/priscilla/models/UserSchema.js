const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },

});

const User = mongoose.model('user', usersSchema); // putting  the schema as a collection in the database (that is converting)

module.exports = User