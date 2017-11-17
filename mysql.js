var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "850806",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;

  console.log("Connected!");

  var sql = "INSERT INTO users (name, favorite_product) VALUES ('Michelle', '156')";

  con.query(sql, function (err, result, fields) {
    if (err) throw err;

    console.log(result.insertId);
  });
});