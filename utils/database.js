var mysql = require('mysql2');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'moran-ua'
});

module.exports = con.promise();
