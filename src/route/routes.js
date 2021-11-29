const express = require("express");
const router = express.Router();

router.get("/api/user",(req, res)=>{
	res.send("Pedro Kussy");
})

module.exports = router;