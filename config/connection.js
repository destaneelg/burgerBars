var mysql = require("mysql");

var connection ;
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    connection = mysql.createConnection({
        host:"localhost"
        user: "root",
        password:"purple.R0s",
        database: "burgers_db"
    });
};


connection.connect(function (err) {
    if (err) {
        console.error("Unable to connect: " + err.stack);
        return
     }
     console.log("Connected!")
});
module.exports = connection;
