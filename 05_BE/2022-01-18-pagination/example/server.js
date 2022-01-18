require("dotenv").config();

const express = require("express");
const server = express();

require("./lib/database.js");
const Product = require("./models/Product.js");

server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));

server.use(express.json());

// NOTE: the paths in this server are for demonstration purposes only and do not follow REST principles!

server.get("/all-products", async (req, res, next) => {
    try {
        const allProducts = await Product.readAll();
        res.json(allProducts);
    } catch (error) {
        next(error);
    }
});

server.get("/expensive-products", async (req, res, next) => {
    try {
        const expensiveProducts = await Product.readExpensiveProducts();
        res.json(expensiveProducts);
    } catch (error) {
        next(error);
    }
});

server.get("/paged-products", async (req, res, next) => {
    try {
        // we can take pageNumber and pageSize from the query:
        // ..../paged-products?pageNumber=1&pageSize=20
        const pageNumber = req.query.pageNumber;
        const pageSize = req.query.pageSize;
        const products = await Product.readPage(pageNumber, pageSize);
        res.json(products);
    } catch (error) {
        next(error);
    }
});

server.get("/page-refactored", async (req, res, next) => {
    try {
        const pageNumber = req.query.pageNumber;
        const pageSize = req.query.pageSize;
        const products = await Product.readPageRefactored(pageNumber, pageSize);
        res.json(products);
    } catch (error) {
        next(error);
    }
});

server.use((error, req, res, next) => {
    console.log(error);
    res.status(500).end();
});
