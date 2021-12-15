const Sequelize = require("sequelize")
const sequelize = new Sequelize('sql5454751', 'sql5454751', 'M5QnVJdkeD', {
  host: 'sql5.freesqldatabase.com',
  dialect: 'mysql'
});
try {
   sequelize.authenticate();
  console.log('MySql Conected.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


module.exports = sequelize