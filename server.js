const express = require("express");
const bodyParser = require("body-parser"); 
const methodOverride = require("method-override");

var PORT = process.env.PORT || 8080;
const app = express();

const exphbs = require("express-handlebars");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ 
    extended: false }));
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT);
