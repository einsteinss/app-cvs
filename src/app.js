require("dotenv").config();

const express = require("express");
const app = express();
app.set("port", 3081 || process.env.PORT)



app.listen(app.get("port"), function(){
	console.log("Server running!")
})