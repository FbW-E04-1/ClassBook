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
    // every user now needs to have a role.
    role: {
        type: String,
        required: true,
        default: "User",
    },
}, {
    version: false,
});


schema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password + process.env.PASSWORD_PEPPER, +process.env.PASSWORD_SALT_ROUNDS);
    next();
});

const User = mongoose.model("User", schema);


async function register({ name, email, password, role }) {
    const newUser = new User({
        name,
        email,
        password,
        role
    });

    return await newUser.save();
}

async function login(email, password) {
    const user = await User.findOne({ email });
    if (!user) return null;

    const passwordCorrect = await bcrypt.compare(password + process.env.PASSWORD_PEPPER, user.password);
    if (!passwordCorrect) return null;

    return {
        userId: user._id,
        name: user.name,
        role: user.role,
    };
}

async function read(id) {
    return id ? await User.findById(id) : await User.find();
}

async function readByEmail(email) {
    return await User.findOne({ email });
}

async function removeAll() {
    return User.deleteMany();
}

module.exports = {
    read,
    readByEmail,
    register,
    login,
    removeAll,
};
