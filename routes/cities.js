var express = require("express");
var router = express.Router();

let cities = [
    {Name: "Apalit"}, 
    {Name: "Bacolor"}, 
    {Name: "Candaba"}, 
    {Name: "Floridablanca"},
    {Name: "Guagua"},
    {Name: "Mexico"},
    {Name: "San Fernando"},
    {Name: "San Luis"},
    {Name: "San Simon"}
];

router.get("/", (req, res) => {
    res.send(cities);
});

module.exports = router;