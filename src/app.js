require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mogran = require("morgan")
const app = express();

app.set("port",process.env.PORT);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(mogran("dev"))

app.use("/", require("./route/routes"))

app.listen(app.get("port"), function(){
	console.log("Server running!");
})