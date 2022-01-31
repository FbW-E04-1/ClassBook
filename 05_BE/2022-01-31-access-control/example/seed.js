require("dotenv").config();
require("./lib/database.js");

const mongoose = require("mongoose");
const faker = require("./lib/faker");

const User = require("./models/User.js");

faker.seed(1234);

async function seed() {
    await User.removeAll();

    // Admin
    await User.register({
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: "adminpassword",
    });


    // Photographer
    await User.register({
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: "photographerpassword",
    });


    // User
    await User.register({
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: "userpassword",
    });

    mongoose.connection.close();
}

seed();
