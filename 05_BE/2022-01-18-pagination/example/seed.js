require("dotenv").config();
require("./lib/database.js");

const mongoose = require("mongoose");
const faker = require("./lib/faker");

const Product = require("./models/Product.js");

console.log(process.argv);
const numberOfRecords = process.argv[2] || 100;

faker.seed(1234);

async function seed() {
    await Product.removeAll();

    for (let i = 0; i < numberOfRecords; i++) {
        await Product.create({
            name: faker.commerce.productName(),
            price: (faker.commerce.price() / 100).toFixed(2),
            order: i,
        });
    }

    mongoose.connection.close();
}

seed();
