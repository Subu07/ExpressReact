const express = require('express');
const router = express.Router();
const mysql = require('mysql');

let data;
// Create Connection
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
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

query = "SELECT * FROM supervisor; SELECT * FROM Category; SELECT * FROM Batch; SELECT * FROM Student;SELECT DISTINCTROW S1.name AS studentName, S1.roll_no AS roll_no, P.name AS projectName, C.Category_name, S2.name AS supervisorName, B.year\n" +
    "FROM Student AS S1\n" +
    "INNER JOIN Project_has_Student S on S1.idStudent = S.Student_idStudent\n" +
    "INNER JOIN Project P on S.Project_idProject = P.idProject\n" +
    "INNER JOIN Project_has_Category C on P.idProject = C.Project_idProject\n" +
    "INNER JOIN Supervisor S2 on P.Supervisor_idInstructor = S2.idInstructor\n" +
    "INNER JOIN Batch B on S1.Batch_batch_no = B.year";
inputsupervisor = "INSERT INTO supervisor (idInstructor,name) VALUES ('5','Sujan')";

db.query(query,(err,result) => {
    if(err) console.log(err);
    else {
        console.log("Connected",result);
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

 router.post('/reqData', (req,res) => {
     console.log(req.body);
     res.send(data[4]);
 });

module.exports = router;
