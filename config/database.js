const Sequelize = require('sequelize');

// module.exports =  new Sequelize('findmyevent', 'root', 'root', {
//   host: 'localhost',
//   dialect: 'mysql',
//   operatorsAliases: false,

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection(
	{
		host: 'localhost',
		port: 3306,
		user: 'root',
		password: 'root',
		database: 'findmyevent'
	});
}

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
