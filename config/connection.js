var mysql = require("mysql");

//Mysql settup
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
});

//set up connection with mysql
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;