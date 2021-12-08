var express = require('express')
var router = express.Router() 

const tasks = [
    {id:1, taskname: "washing"},
    {id:2, taskname: "cleaning"}, 
    {id:3, taskname: "cooking"}, 
]

router.get("/",function (req, res) {
    res.send(tasks)
})

router.get("/:tasksId", function (req, res) {
    // + converts a string to number (in this case is the id)
    const task = tasks.find((item) => item.id === +req.params.tasksId)
    res.send(task)
})

router.post("/", function (req, res){
    res.send("waw waw waw")
})


router.delete("/:tasksid", function (req, res) {
    const task = tasks.find((t) => t.id === +req.params.tasksid);
    res.status(204);
    res.end()
    }); 



module.exports = router 