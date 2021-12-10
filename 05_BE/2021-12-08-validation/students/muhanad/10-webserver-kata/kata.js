require("dotenv").config();
const express = require("express");
const resRouter = require("./router/resourceRouter")
const userRoute = require("./router/userRouter")


const server = express();

const port = process.env.PORT

server.listen(port, () => console.log(`server running on ${port}`))


const logger = require("./midWare/loggerMidWare")

server.use(logger)

server.use(express.json())




server.use("/resource", resRouter)
server.use("/user" , userRoute )