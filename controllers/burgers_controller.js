var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
router.get("/", function(req, res){
	res.redirect("/index");
});
router.get("/index", function(req, res) {
    burger.selectAll(function(data) {
      var burgerData = {
        burgers: data
      };
      res.render("index", burgerData);
    });
});
router.post("/api/burger", function(req, res) {
  burger.insertOne(req.body.name, function(data) {
    res.json({ok:true});
  });
});
router.put("/api/burger/:id", function(req, res) {
  var burgerID = req.params.id;
  console.log("id =" + burgerID);
burger.updateOne(burgerID, function(data){
    res.json({ok:true});
  });
});

module.exports = router;
