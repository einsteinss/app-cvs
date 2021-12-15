const vendas = require("./../data/vendasData")

class Vendas{

	
	getAll(req,res){
		res.send("Hello word! Is running...")
	}

	getOne(req,res){
		console.log(req)
		res.send("Hi, you request")
	}
}

module.exports = Vendas;