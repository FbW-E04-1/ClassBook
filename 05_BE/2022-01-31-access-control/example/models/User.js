const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    version: false,
});


schema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password + process.env.PASSWORD_PEPPER, +process.env.PASSWORD_SALT_ROUNDS);
    next();
});

const User = mongoose.model("User", schema);


async function register ({ name, email, password }) {
    const newUser = new User({
        name,
        email,
        password,
    });

    return await newUser.save();
}

async function login (email, password) {
    const user = await User.findOne({ email });
    if (!user) return null;

    const passwordCorrect = await bcrypt.compare(password + process.env.PASSWORD_PEPPER, user.password);
    if (!passwordCorrect) return null;

    return {
        userId: user._id,
        name: user.name,
    };
}

async function removeAll () {
    return User.deleteMany();
}

module.exports = {
    register,
    login,
    removeAll,
};
