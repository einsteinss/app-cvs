const express = require("express");
const router = express.Router();
//const produtos = require("./../service/produtoService");
var vendas = require("./../service/vendaService")
vendas = new vendas()
router.get("/api",(req, res)=>{
	res.send("Hello! Welcome come here.");
})

router.get("/api/vendas", vendas.getAll);
router.get("/api/vendas/:id/", vendas.getOne);

module.exports = router; 