require("dotenv").config();
const express = require("express");

const server = express();
server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));


const products = [
    {
        id: 1,
        name: "product one",
    },
    {
        id: 2,
        name: "product two",
    },
];

const myInnerFunctionThatFails = () => {
    // if we throw an error, the execution stops at that point (like a return)
    // and the error can be caught in one of the parent functions.
    throw new Error("oh_no");
};

const myFunctionThatFails = () => {
    // myFunctionThatFails() does not catch the error, so it bubbles up to the next parent.
    myInnerFunctionThatFails();
};

// global middlewares
// --------------------------------------------------------
server.use(express.json());
server.use(require("./middlewares/logger"));


// routers, endpoints etc.
// --------------------------------------------------------
server.get("/products", (req, res, next) => {
    // with try/catch we "try" to run the code and "catch" the errors when they pop up.
    // in this case, myFunctionThatFails will throw an error because the inner function throws it
    // and it has not been caught yet.
    try {
        console.log("before the function call");
        myFunctionThatFails();
        console.log("after the function call");
        res.status(200).json(products);
    } catch (error) {
        // when we catch the error, all we need to do here is calling next to go to our error handling middleware.
        next(error);
    }
});


server.post("/products", (req, res) => {
    try {
        myFunctionThatFails();
        res.status(201).json({
            productId: Math.random(),
        });
    } catch (error) {
        next(error);
    }
});


server.use("/teams", require("./routers/teams"));


// global error handlers
// --------------------------------------------------------
server.use(require("./middlewares/errorHandler"));

// this middleware is the last resort for a request.
// if we can not find a matching endpoint, we end up here and respond with the status code 404 (not found).
// express responds with 404 by default, but it also sends html in the payload.
// in order to prevent that, we need to handle the request ourselves.
server.use((req, res) => res.status(404).end());
