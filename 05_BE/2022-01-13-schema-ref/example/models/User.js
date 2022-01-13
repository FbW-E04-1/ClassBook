// for each collection or entity type we create a separate model
// e.g.: User, Product, Task, Category...
const mongoose = require("mongoose");

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
const schema = new mongoose.Schema({
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
        validate: v => (v <= 100),
    },

    // addressOffice: addressSchema, // shortcut way to define the type
    address: { 
        type: addressSchema, 
    },
},
{
    // mongoose adds a __v property by default
    // with this option we can deactivate it
    versionKey: false,
});

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
const User = mongoose.connection.model("User", schema);

// we can define functions to give our models some functionality
// there is another way in mongoose to do so: have a look at static methods
async function create ({username, password, age, address}) {
    const newUser = new User({
        username,
        password,
        age,
        address
    });

    return await newUser.save();
}

async function readOldVersion () {
    // get all information about our users
    const users = await User.find();

    const usersWithoutPasswords = users.map(user => {
        return {
            _id: user._id,
            username: user.username,
            age: user.age,
        };
    });

    // return only username, _id and age per user
    return usersWithoutPasswords;
}

async function read () {
    // we can use .find() as we know from mongodb to fetch data from the database
    // there are many ways to tell mongoose which properties we want to fetch from each document
    // we call that 'projection' and it can be part of the find method as the second parameter

    // const users = await User.find({}, { password: 0, age: 0 });
    // const users = await User.find({}, "_id username age");
    // const users = await User.find({}, ["_id", "username", "age"]);

    // we can also chain a separate function after find to do a projection
    // that one is called .select() and works just the same way as the second find parameter
    const users = await User
        .find({})
        .select("-password");

    return users;
}

// to update a user we need its userId and the properties we want to change
// when we use an object as parameter and destructuring to get the properties it will be easier to work with it
// on function call we do not need to have the parameters in the right order as they are just properties of an object
async function update (userId, { username, age, password, email }) {
    await User.findByIdAndUpdate(userId, {
        username,
        age,
        password,
        email,
    });
}

// to delete a user we need its userId again
// but this time that is all we need
// we can then use .findByIdAndDelete() to do exactly what it says: find the user by its ID and delete
async function remove (userId) {
    await User.findByIdAndDelete(userId);
}

async function removeAll() {
	await User.deleteMany({});
}

// we only export our functions here to encapsulate the database logic
// if you decided to use static functions instead, you may want to export the model itself
module.exports = {
    create,
    read,
    update,
    remove,
    removeAll,
};
