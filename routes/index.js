const express = require("express");
const router = express.Router();
const mysql = require("mysql");

let data;

// Create Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "beproject",
  multipleStatements: true
});

//Connect
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected...");
});

//Queries
query = "SELECT * FROM supervisor;SELECT * FROM Category; " +
    "SELECT * FROM Batch; SELECT * FROM Student;" +
    "SELECT P.Project_idProject, GROUP_CONCAT(DISTINCT(S.name)SEPARATOR ',') AS studentName,P2.name AS projectName, GROUP_CONCAT(DISTINCT(S.roll_no)) AS studentRoll, S2.name AS supervisorName, GROUP_CONCAT(DISTINCT(S.Batch_batch_no)) AS year, GROUP_CONCAT(DISTINCT(Category.Category_name)) AS category FROM Project_has_Student P INNER JOIN Student S on P.Student_idStudent = S.idStudent " +
    "INNER JOIN Project P2 on P.Project_idProject = P2.idProject " +
    "INNER JOIN Project_has_Category Category on P2.idProject = Category.Project_idProject " +
    "INNER JOIN Supervisor S2 on P2.Supervisor_idInstructor = S2.idInstructor " +
    "INNER JOIN Batch B on S.Batch_batch_no = B.year GROUP BY P.Project_idProject; " ;


db.query(query, (err, result) => {
  if (err) console.log(err);
  else {
    data = result;
  }
});

/* GET home page. */
 studentQuery = "SELECT * FROM student;SELECT * FROM Supervisor;SELECT * FROM Project;SELECT * FROM BATCH";
router.get('/studentDisplay',(req,res,next) => {
    db.query(studentQuery,(errors,results) => {
        if (errors) throw errors;
        console.log('data received from Student Table: ');
        console.log(results);
        res.send(results);
    })
});

router.post("/delete", (req,res)=> {
  console.log(req.body.id);

});

router.post("/addProject", (req, res) => {
  console.log(req.body);
});

router.get("/selection", function(req, res) {
  //console.log(data);
  res.send(data);
});

//Check for the queries
router.get('/simple', function(req, res, next) {
    res.locals.connection.query('select * from project_has_category', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

module.exports = router;
