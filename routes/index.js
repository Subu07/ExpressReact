const express = require('express');
const router = express.Router();
const mysql = require('mysql');

let data;
// Create Connection
const db = mysql.createConnection({
    host : 'localhost',
    user : 'sujan',
    password : 'salina@@@',
    database : 'beproject'
});

//Connect
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("MySQL connected...");
    }
);

supervisor = "SELECT * FROM supervisor";

db.query(supervisor,(err,result) => {
    if(err) console.log(err);
    else {
        console.log("Connected",result);
        data =result;
    }
});
/* GET home page. */
router.get('/check', function(req, res, next) {
  res.send(data);
});


module.exports = router;
