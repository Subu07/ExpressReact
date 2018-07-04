const express = require('express');
const router = express.Router();
const mysql = require('mysql');

let data;
// Create Connection
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'beproject',
    multipleStatements: true
});



//Connect
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("MySQL connected...");
    }
);

query = "SELECT * FROM supervisor; SELECT * FROM Category; SELECT * FROM Batch; SELECT * FROM Student ";
inputsupervisor = "INSERT INTO supervisor (idInstructor, name) VALUES ('5', 'Sujan')";

db.query(query, (err,result) => {
    if(err) console.log(err);
    else {
        console.log("Connected", result);
        data =result;
    }
});

/* GET home page. */

router.post('/send', (req, res) => {
    console.log(req.body);
});

router.post('/reqData', (req, res) => {
        console.log(req.body);
        res.send([{
            "Year" : "2071",
            "Project_Title" : "Decentralized electronic health record system",
            "Category" : "Database",
            "Name" : "Ajaya Mandal",
            "Roll" : "521",
            "SuperVisor" : "Dr. Subarna Thapa"
}])});


router.get('/check', function(req, res, next) {
  res.send(data);
});


module.exports = router;
