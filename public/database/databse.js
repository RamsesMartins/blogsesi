var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database');

db.run("SELECT * FROM POSTS")