require("dotenv").config()
const mongoose = require("mongoose")
mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://cvs_UseR:Q3VBFzUP5WBSmmA@cvsdb.t9arx.mongodb.net/cvsdb?retryWrites=true&w=majoritys")
	.then(()=>{
		console.log("MongoDb connected")
	}).catch(err =>{
		console.log("Erro: "+err)
	})
module.exports = mongoose