const db = require("./../infra/mongo-database");
const user = db.Schema({
	nome:{
		type:String,
		required: true
	},
	idade:{
		type:Number
	}
})

db.model("usuario",user)

new user({
	nome: "Pedro",
	idade:19
})