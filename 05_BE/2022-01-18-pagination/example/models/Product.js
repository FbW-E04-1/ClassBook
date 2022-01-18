const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    order: {
        type: Number,
        required: true,
    },
}, {
    versionKey: false,
});

const Product = mongoose.connection.model("Product", schema);

async function create({ name, price, order }) {
    const newProduct = new Product({
        name,
        price,
        order,
    });

    return await newProduct.save();
}

async function readAll() {
    return await Product.find();
}


async function readExpensiveProducts() {
    // this is our first approach to fetch expensive products
    // we fetch all products from the database
    // and then we use .filter() to only return the ones that cost more that 7 euros
    // const products = await readAll();
    // const expensiveProducts = products.filter(product => product.price > 7);

    // we can achieve the same result (but faster) on the database side already
    // it almost reads like plain english: "find where price is greater than (gt) seven"
    const expensiveProducts = await Product.find().where("price").gt(7);

    // we could also set our filter in .find() and use the special $gt operator in the price
    // const expensiveProducts = await Product.find({
    //     price: {
    //         $gt: 7,
    //     }
    // });

    return expensiveProducts;
}

async function readPage(pageNumber = 1, pageSize = 20) {
    // with console.time() we can track the time it takes to perform certain tasks
    // it starts with console.time() and ends with console.timeEnd()
    console.time("readPage");
    // we use our readAll() function here in order to not repeat the code
    const products = await readAll();
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;

    const pageProducts = products.slice(startIndex, endIndex);
    // this line stops the timer "readPage" and logs the time in the terminal
    console.timeEnd("readPage");
    return pageProducts;
}

async function readPageRefactored(pageNumber = 1, pageSize = 20) {
    console.time("readPageRefactored");
    const startIndex = (pageNumber - 1) * pageSize;
    // we can make use of two mongoose methods in order to do the pagination on the database side
    // with skip(x) we ignore the first x documents
    // and with limit(y) we return only the next y documents
    const products = await Product.find().skip(startIndex).limit(pageSize);

    console.timeEnd("readPageRefactored");
    return products;
}

async function removeAll() {
    await Product.deleteMany();
}

module.exports = {
    create,
    readAll,
    readPage,
    readPageRefactored,
    readExpensiveProducts,
    removeAll,
};
