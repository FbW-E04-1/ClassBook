require("dotenv").config();

const mongoose = require("mongoose");

const User = require("./models/User.js");
const Article = require("./models/Article.js");

require("./lib/database.js");

async function generateData() {
    await User.removeAll();
    await Article.removeAll();
    
    const alex = await User.create({
        username: "alex",
        password: "12345678",
        age: "32"
    });

    const monica = await User.create({
        username: "monica",
        password: "abcdefgh",
        age: "32"
    });


    const article1 = await Article.create({
        title: "Title of the Article",
        author: alex._id,
        text: "lorem ipsum"
    });

    mongoose.connection.close(); // fix for: not terminating seed.js-script
}

generateData();
