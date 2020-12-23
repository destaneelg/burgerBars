var connection = require("../config/connection.js");
var orm = {
  selectAll: function(callback) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;

      callback(result);

    });
  },
  insertOne: function(burgerName, callback) {
    var queryString = "INSERT INTO burgers SET ?";
    connection.query(queryString, [
      {
        name: burgerName
      }
    ], 
    function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },
  updateOne: function(burger_id, callback) {
    var queryString = "UPDATE burgers SET ? WHERE ?";

    connection.query(queryString, [
      {
      devoured: true
      },
      {
      id: burger_id
      }
    ], 
    function(err, result) {
      if (err) throw err;

      callback(result);
    }
    );
  }
};

module.exports = orm;
