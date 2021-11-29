const express = require("express");
const route = express.Router();

route.get("/api/user",(req, res)=>{
	res.send("Pedro Kussy");
})

module.exports = route;