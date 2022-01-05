/*
1. Create a Webserver with `Express`
   - the port it listens to shall be defined in an `.env` file*/ 
require("dotenv").config();
const express = require("express");

const server = express();

const port = process.env.PORT;

server.listen(port, () => console.log(`server is running on ${port}`));

server.use(express.json())

//2. Create one route (`GET /`) that responds with `hello world`.
server.get("/", (req,res)=>{
res.send("Hello World")
})

/*
3. Create routes in the `server.js` for the resource type `resource`:
   ```
   #HTTP-METHOD URL-PATH
    GET /resource
    GET /resource/:id
    POST /resource
    PUT /resource/:id
    DELETE /resource/:id
   ```

   All these routes shall literally respond with the used HTTP-method and the used URL-path as received in the client-request and with an appropriate HTTP-status-code, e. g.: `res.status(200).send('GET /resource/' + res.params.id)` in case of the route `GET /resource/:id`

   By the way: It is assumed that a resource exists for every `id`, hence no errors will occur.

   [HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) */

   server.get("/resource",(req,res)=>{
       res.send(`${req.url} ${req.method}`);
   })

    server.get("/resource/:resId", (req, res) => {
      res.send(`${req.url} ${req.method} ${req.url} ${req.params.resId}`);
    });

    server.post("/resource", (req,res)=>{
console.log(`${req.method} ${req.url}`);
res.status(201).send(req.body)
    })