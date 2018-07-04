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

query = "SELECT * FROM supervisor; SELECT * FROM Category; SELECT * FROM Batch ";
inputsupervisor = "INSERT INTO supervisor (idInstructor,name) VALUES ('5','Sujan')";

db.query(query, (err,result) => {
    if(err) console.log(err);
    else {
        console.log("Connected", result);
        data =result;
    }
});

/* GET home page. */
router.get('/', (req,res,next) => {
   res.render('index.html',{title:" Hello to the react World from the express world"})
});

router.post('/send', (req, res) => {
    console.log(req.body.name);
});


router.get('/check', function(req, res, next) {
  res.send(data);
});


module.exports = router;
