var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
// serve static content from the public directory
app.use(express.static("public"));
// parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
var exhbs = require("express-handlebars");
app.engine("handlebars", exhbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// import routes from controller
var routes = require("./controllers/burgersController.js");
app.use(routes);
app.liseten(PORT, function(){
    console.log("Server listening on: http://localhost" + PORT);
});
