var connection = require("../config/connection.js");

function questionMarks(num) {
  var arr = []; 
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}
sqlhelper(obj) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if(typeof value === "string" && value.indexOf( " ") >= 0){
        value = "'" + value + "'" ;
      }
      arr.push(key + "=" + value)
    }
  }
  return arr.toString();
}
var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table +  ";";

    connection.query(queryString, function(err, res) {
      if (err){
        throw err
      };
      cb(re);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table +
    " (" +
    cols.toString() +
    ") " +
    "VALUES (" +
    questionMarks(vals.length) +
    ") ";

    console.log(queryString); 

    connection.query(queryString, vals, function(err, res) {
      if (err) {
        throw err; 
    }
    cb(res)  
    });
  },
  updateOne: function(table, objColVals, condition ,cb) {
    var queryString = "UPDATE " + table +
    " SET " +
    sqlhelper(objColVals) +
    " WHERE " +
    condition;

    console.log(queryString); 

    connection.query(queryString, vals, function(err, res) {
      if (err) {
        throw err; 
    }
    cb(res)  
    ;
    });
  }
};
module.exports = orm;
