const route = require("express").Router()


let users = {
  1: {
     firstname: "Lise",
     lastname: "Meitner",
     email: "lmeitner@example.com"
  },
  2: {
     firstname: "Albert",
     lastname: "Einstein",
     email: "aeinstein@example.de"
  }
}
    



route.get("/", (req, res) => {
    res.send("hello world")
})

route.get("/" , (req, res)=> {
  res.send(`${req.method} ${req.url} `)  
})

route.get("/:resId" , (req, res)=> {
    res.send(`${req.method} ${req.url} ${req.params.resId}`)  
})

route.post("/" , (req, res) => {
  /* console.log(`${req.method} ${req.url}`); */
    res.status(201).send(req.body)
})

route.delete("/:resId" , (req, res) => {
  const target =  +req.params.resId
  delete users[target]
  
  res.status(204).json(users)
})

route.put("/:resourceId", (req, res) => {
  
  res.status(201).send(`${req.method} ${req.url} ${req.params.resourceId}`)
  console.log(resource);
})

module.exports = route