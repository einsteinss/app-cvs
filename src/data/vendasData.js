const db = require("./../infra/mysql-database")

function getAll(){
	 db.query("SELECT * FROM vendas",function (err, result, fields) {
    if (err) throw err;
    return result;
  })
}

function getOne(id){
  const AllDatas = getAll()
  for (var i = 0; i <AllDatas.length; i++) {
    if (i > AllDatas.length){
      return {"message":"not existe"}
      break;
    }

    if (AllDatas[i].id == id)return AllDatas[i]
  }

}

module.exports = {
  getAll: getAll,
  getOne: getOne
}