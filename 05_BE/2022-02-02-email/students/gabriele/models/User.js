const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const token = require("../lib/token.js");

//let CryptoJS = require('crypto-js');

const {sendEmail} = require('../lib/email.js');

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
    isEmailVerified: {
        type: Boolean,
        default: false,
    },
}, {
    version: false,
});


schema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password + process.env.PASSWORD_PEPPER, +process.env.PASSWORD_SALT_ROUNDS);
    next();
});

const User = mongoose.model("User", schema);


async function read(id) {
    return id ? await User.findById(id) : await User.find();
}

async function readByEmail(email) {
    return await User.findOne({ email });
}

async function register({ name, email, password, role }) {
    /*
    // 1. send email with verification link
    // http://localhost:8080/verifyEmail/thomas@example.com
    // http://localhost:8080/verifyEmail/EMAIL/RANDOM_NUMBER // => we need to store the RANDOM_NUMBER
    // http://localhost:8080/verifyEmail/EMAIL/sha256(salt+thomas@example.com)
       => we need some _secret_
          e.g. 
          - salted/hash
    */

    const newUser = new User({
        name,
        email,
        password,
        role,
    });

    const PROTOCOL = process.env.HTTP_PROTOCOL;
    const HOST = process.env.HOST;
    const PORT = process.env.PORT;
    
    let payload = process.env.SENDGRID_SECRET_GENERATION_PEPPER + email;
    let secret = token.signVerificationEmail(payload);
    
    //let secret = CryptoJS.SHA256(process.env.SENDGRID_SECRET_GENERATION_PEPPER + email)
    
    VERIFICATION_LINK = `${PROTOCOL}://${HOST}:${PORT}/auth/verifyEmail/${email}/${secret}`;

    sendEmail({
        to: email,
        from: process.env.SENDGRID_VERIFIED_EMAIL,
        subject: 'our webapp email verification',
        text: VERIFICATION_LINK,
        html: `<a href="${VERIFICATION_LINK}">click to verify</a>`
    })

    return await newUser.save();
}

async function login(email, password) {
    const user = await readByEmail(email);
    if (!user) return null;

    const passwordCorrect = await bcrypt.compare(password + process.env.PASSWORD_PEPPER, user.password);
    if (!passwordCorrect) return null;

    return {
        userId: user._id,
        name: user.name,
        role: user.role,
    };
}

async function removeAll() {
    return User.deleteMany();
}

async function update(id, user) {
    console.log("user: ", id, user);
    
    return await User.findByIdAndUpdate(id, user);
}

module.exports = {
    read,
    readByEmail,
    register,
    login,
    removeAll,
    update,
};
