var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function(req, res) {
	res.redirect('/index');
});

router.get('/index', function(req, res) {
	burger.all(function(data) {
		var hbsObject = {burgers: data};
		res.render('index', hbsObject);
	});
});


router.post('/burgers/insertOne', function(req, res) {
	burger.create(['burger_name', 'devoured'], [req.body.name, false], function() {
		res.redirect('/index');
	});
});


router.put('/burgers/updateOne/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.update({devoured: req.body.devoured}, condition, function() {
		res.redirect('/index');
	});
});

router.delete('/burgers/updateOne/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.delete({devoured: req.body.devoured}, condition, function() {
		res.redirect('/index');
	});
});


module.exports = router;
