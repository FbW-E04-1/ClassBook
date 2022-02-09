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
        email: "admin@example.com",
        password: "1234",
        role: "Admin",
    });


    // Photographer
    await User.register({
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: "photographerpassword",
        role: "Photographer",
    });


    // User
    await User.register({
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: "userpassword",
        role: "User",
    });

    mongoose.connection.close();
}

seed();
