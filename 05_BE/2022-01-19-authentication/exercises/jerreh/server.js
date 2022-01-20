require("dotenv").config()
const bcrypt = require("bcrypt");
const express=require("express")
const server=express()

 server.listen(process.env.PORT, () =>
   console.log(`server listening on port ${process.env.PORT}`)
 );
//server.listen(8000)

server.use(express.json());

const users = {
  "paul@example.com": {
    name: "Paul",
    password: "$2b$12$V8Za0U7tJl9sCd9f2IjOGOhtwWbXjbOb/WC9iW/St92ME3.SypBza",
  },
};

const saltedRounds=12

server.post("/users",(req,res)=>{
let email=req.body.email
let password=req.body.password
  let hash=bcrypt.hashSync(password,saltedRounds)
  console.log(`new Hash`,hash);
  
  res.json(hash)

})
server.post("/auth" ,(req,res)=>{
  let email=req.body.email
  let password=req.body.password
  
  let hash=users[email].password

  let result = bcrypt.compareSync(password, hash);

  console.log(`Your Result Is`, result);
res.json(result)
})



//This  Part belongs to the server
server.use((error, req, res, next) => {
  console.log(error);
  res.status(500).end();
});