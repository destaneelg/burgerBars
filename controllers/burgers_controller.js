var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/index", function(req, res){
	res.redirect("/");
});
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var burgerData = {
        burgers: data
      };
      res.render("index", burgerData);
    });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(
  ["name", "devoured"],
  [req.body.name, req.body.devoured],
  function(result) {
    res.json({ id: result.insertId});
  });
});
router.put("/api/burger/:id", function(req, res) {
  var burgerID = req.params.id;
  console.log("id =" + burgerID);
burger.updateOne({devoured: req.body.devoured}, condition, function(result){
    if (result.changeRows === 0) {
      return res.status(404).end();
    }else {
      res.status(200).end()
    };
  });
});

module.exports = router;
