var express = require("express");
var router = express.Router();

let data = [
   { id: 1, title: 'Create a project',  order: 1, completed: true, author: 'Diego Laura' },
   { id: 2, title: 'Take a cofféé',     order: 2, completed: true, author: 'Laong-Laan' },
   { id: 3, title: 'Write new article', order: 3, completed: true, author: 'Agap-ito Bagumbayan' },
   { id: 4, title: 'Walk toward home', order: 4, completed: false, author: 'Taga-Ilog' },
   { id: 5, title: 'Have some dinner', order: 5, completed: false, author: 'Dimas-Ilaw' },
];

router.get("/", (req, res) => {
    res.send(data);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  let datum = data.find((item) => {
      return item.id === Number(id);
  });
  res.status(200).send(datum ? datum : "Record not found!");
});

router.post("/datum", (req, res) =>{
   let data = {
     id: req.body.id,
     title: req.body.title,
     age: req.body.order,
     gender: req.body.author,
   };
   data.push(data);
   res.status(200).send( data );
 });

router.put("/:id", (req, res) => {
   const { id } = req.params;
   let datum = data.find((item) => {
         return item.id === Number(id);
   });
   res.status(200).send(datum ? datum : ("Record " + id + " not found!"));
});

router.delete("/:id", (req, res) => { // .delete (simulation)
  const { id } = req.params;
  data = data.filter(item => item.id != Number(id));
  res.status(200).send("Record " + id + " has been deleted.");
});

module.exports = router;

