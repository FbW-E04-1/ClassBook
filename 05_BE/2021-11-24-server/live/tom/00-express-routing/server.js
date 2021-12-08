require("dotenv").config(); // this allows us to run the .env file
const express = require("express");

const server = express();

server.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`)
); //we import PORT from the .env file

