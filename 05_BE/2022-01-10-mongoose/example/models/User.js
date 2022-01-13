// for each collection or entity type we create a separate model
// e.g.: User, Product, Task, Category...
const mongoose = require("mongoose");

//mongoose_subdocuments here => addressschema subdocu of schema
const addressSchema = new mongoose.Schema({
  // street: 'string', // Shortcut to define the type
  street: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  city: {
    type: String,
    required: true,
    
  },
});
// this schema represents the document structure
// we can define the type, if it is required or not, validate with our own function...
const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      validate: (v) => v <= 100,
    },
    address: {
      type: addressSchema,


    },

  },
  {
    // mongoose adds a __v property by default
    // with this option we can deactivate it
    versionKey: false,
  }
);


 /* const childSchema = new mongoose.Schema({
   street: {
     type: String,
   },
   postalCode: {
     type: String,
   },
   city: {
     type: String,
     required: true,
     
     required: true,
     
      
    
   },
  
 },
 
 ); */

/* const parentSchema = new mongoose.Schema({
  // Array of subdocuments
  children: [childSchema],
  // Single nested subdocuments. Caveat: single nested subdocs only work
  // in mongoose >= 4.2.0
  child: childSchema,
}); */
 






// example document
// {
//     _id: "61d5937c96a9837e162fe71b",
//     username: "Dominik",
//     password: "mysecretpassword",
//     age: 31,
// }

// to create a model, we call the model() function and provide a name and the schema
// the model's name will be converted into lowercase and plural to get the collection name
// if the collection does not exist, mongoose will create it for us
// model name: User => collection name: users
const User = mongoose.connection.model("User", schema,);


// we can define functions to give our models some functionality
// there is another way in mongoose to do so: have a look at static methods
async function create (username, password, age) {
    const newUser = new User({
      username,
      password,
      age,
      address: {
        street: "Main Street 11",
        postalCode: "12345",
        city: "Frankfurt",
      },
    });

    

    console.log("before save");
    return await newUser.save();
}

async function read () {

}

// we only export our functions here to encapsulate the database logic
// if you decided to use static functions instead, you may want to export the model itself
module.exports = {
    create,
    read,
};
