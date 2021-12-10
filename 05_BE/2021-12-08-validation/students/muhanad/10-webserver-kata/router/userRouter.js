const route = require("express").Router()


const users = [
    {id : 1, name :"first"},
    {id : 2, name :"second"},
    {id : 3, name :"third"},
    ]

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
    const target = users.find((item) => item.id === +req.params.resId)
    const index = users.indexOf(target)
    const clone = [...users]
    clone.splice(index, 1)
    res.send(clone)
  })
  
  route.put("/:usersId", (req, res) => {
    
    res.status(201).send(`${req.method} ${req.url} ${req.params.usersId}`)
    console.log(users);
  })




module.exports = route