var mysql = require("mysql");

var connection; 

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "purpleR0s",
      database: "burgers_db"
});
};
connection.connect(function(err) {
  if (err) {
    console.error("could not connect : " + err.stack);
    return;
  }
  console.log("You are now connected " + connection.threadId);
});


module.exports = connection;
