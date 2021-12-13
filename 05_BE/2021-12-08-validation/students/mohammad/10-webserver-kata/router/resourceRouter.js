const route = require("express").Router()

let resource = [
    { id: 1, value: "name1" },
    { id: 2, value: "name2" },
    { id: 3, value: "name3" },
]

route.get("/", (req, res) => {
    res.send("Hello World!")
})

route.get("/", (req, res) => {
    res.send(`${req.method} ${req.url}`)
})

route.get("/:resID", (req, res) => {
    res.send(`${req.method} ${req.url} ${req.params.resID}`)
})

route.post("/", (req, res) => {
    console.log(`${req.method} ${req.url}`)
    res.status(201).send(req.body)
})

route.delete("/:resID", (req, res) => {
    const target = resource.find(item => item.id === +req.params.resID)
    const index = resource.indexOf(target)
    const clone = [...resource]
    clone.splice(index, 1)
    res.send(clone)
})

route.put("/:resID/:input", (req, res) => {
    const data = { id: +req.params.resID, value: req.params.input }
    const clone = resource.map(item => item.id !== +req.params.resID ? item : data)
    resource = clone
    console.log(resource)
    res.status(201).send(`${req.method} ${req.url} ${req.params.resID}`)
})

module.exports = route

