const route = require("express").Router()


const resource = [
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
    const target = resource.find((item) => item.id === +req.params.resId)
    const index = resource.indexOf(target)
    const clone = [...resource]
    clone.splice(index, 1)
    res.send(clone)
  })
  
  route.put("/:resourceId", (req, res) => {
    
    res.status(201).send(`${req.method} ${req.url} ${req.params.resourceId}`)
    console.log(resource);
  })











module.exports = route