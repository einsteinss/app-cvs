const mysql = require('mysql2');

const connection = (async () => {
    await const con =   mysql.createConnection({
        host:process.env.MYSQL_DB_HOST,
        user:process.env.MYSQL_DB_USER,
        password:process.env.MYSQL_DB_PASS,
        database:process.env.MYSQL_DB_NAME,
        port:process.env.MYSQL_DB_PORT
    });

    await con.connect((err) => {
        if (err) {
            console.log('Erro ao conectar com a base de dados:', err);
            return;
        }
        console.log('Conexão estabelecida com a base de dados');
    })
})();

module.exports = connection;