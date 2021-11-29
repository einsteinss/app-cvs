require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
app.set("port",process.env.PORT);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(app.get("port"), function(){
	console.log("Server running!");
})