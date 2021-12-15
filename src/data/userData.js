const db = require("./../infra/mysql-database")

  function getUser(){
	 db.query("SELECT * FROM usuarios",function (err, result, fields) {
    if (err) throw err;
    return result;
  })
}

module.exports = {
  getUser: getUser
}