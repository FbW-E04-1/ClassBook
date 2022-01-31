const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    photographer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    version: false,
});


const Photo = mongoose.model("Photo", schema);


async function create ({ title, imgUrl, photographer }) {
    const newPhoto = new Photo({
        title,
        imgUrl,
        photographer,
    });

    return await newPhoto.save();
}

async function read (id) {
    return id ? await Photo.findById(id) : await Photo.find();
}

async function removeAll () {
    return Photo.deleteMany();
}

module.exports = {
    create,
    read,
    removeAll,
};
