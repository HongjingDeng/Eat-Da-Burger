//dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

//set up the Exprepress App
//create an instance of the express app
var app = express();

//set the port of this app
//process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

//set Handlebars as the default templating engine
app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");