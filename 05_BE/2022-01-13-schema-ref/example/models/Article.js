const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({ 
	title: {
		type: String,
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	text: {
		type: String,
	}


});

const Article = mongoose.connection.model("Article", articleSchema);

async function create(articleObj) {
	const {title, author, text} = articleObj;
	const newArticle = new Article({
		title,
		author,
		text
	});

	console.log("Article.create()", newArticle);

	return await newArticle.save();
}

async function read() {
	const articles = await Article
		.find({})
		// .populate('author', { password: 0})
		.populate('author', "-password")

	console.log("Article.read()", articles);

	return articles;
}

async function removeAll() {
	await Article.deleteMany({});
}

module.exports = {
    create,
    read,
    //update,
    //remove,
	removeAll,
};
