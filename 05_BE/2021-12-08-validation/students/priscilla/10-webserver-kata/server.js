require("dotenv").config();
const express = require("express");
const resRouter = require("./router/resourceRouter")
const userRouter = require("./router/userRouter")



const server = express();

const port = process.env.PORT

server.listen(port, () => console.log(`server running on ${port}`))

const logger = require("./middleware/loggerMiddleware")
server.use(logger)


server.use(express.json())


server.use("/resource", resRouter)
server.use("/user", userRouter)

