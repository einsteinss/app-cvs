require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("port", 3081 || process.env.PORT);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(app.get("port"), function(){
	console.log("Server running!");
})