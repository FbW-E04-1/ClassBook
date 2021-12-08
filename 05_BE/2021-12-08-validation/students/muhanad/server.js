require("dotenv").config();
const Ajv = require("ajv")
const ajv = new Ajv()

const express = require("express");
const server = express();

server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));

// populate req.body - req.header 'Content-Type' must be 'application/json'
server.use(express.json());

server.use(validateMiddleware)

function validateMiddleware(req, res,next) {
    const schema = {
        type: "object",
        properties: {
          foo: {type: "integer"},
          bar: {type: "string"},
          password: {
            type: "string",
            minLength:8}
        },
        required: ["foo","password"],
        additionalProperties: false
      }
      const valid = ajv.validate(schema, req.body);
    if (!valid) {
        console.error(ajv.errors);
        return res.json(ajv.errors)
        
    } else {
        res.json(req.body);
        console.log("data successfully validated");
        next()
    }
}

server.post("/resource", (req, res)=> {
    console.log(req.body);
    res.send(req.body);
} )






// '404' if nothing else got triggered
server.use((req, res) => res.status(404).end());
