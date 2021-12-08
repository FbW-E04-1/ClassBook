var express = require('express')
var router = express.Router() 

var categories = [
    {id: 1, name: "pris"},
    {id: 2, name: "Mohannad"},
    {id: 3, name: "Gabo"}
]

router.get('/',function(req, res) {
    res.send(categories)
})

router.get("/:categorieId",function(req, res) {
    const categorie = categories.find(category => category.id === +req.params.categorieId)
    res.send(categorie)
})

router.post("/", function (req, res) {
    res.send("Success!!!!!")
    })

router.delete("/:id", function (req, res) {
    const category = categories.find((c) => c.id === +req.params.id);
    res.status(204);
    res.end()
    }); 

module.exports = router 