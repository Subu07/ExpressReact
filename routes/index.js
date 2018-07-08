const express = require("express");
const router = express.Router();
const mysql = require("mysql");

let data;
let joinData;
// Create Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "sujan",
  password: "salina@@@",
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
query =
  "SELECT * FROM supervisor;SELECT * FROM Category; SELECT * FROM Batch; SELECT * FROM Student;";
joinQuery =
  "SELECT P.Project_idProject, GROUP_CONCAT(DISTINCT(S.name) SEPARATOR '/') AS studentName,P2.name AS projectName, GROUP_CONCAT(DISTINCT(S.roll_no)) AS studentRoll, S2.name AS supervisorName, GROUP_CONCAT(DISTINCT(S.Batch_batch_no)) AS year, GROUP_CONCAT(DISTINCT(Category.Category_name)) AS category FROM Project_has_Student P INNER JOIN Student S on P.Student_idStudent = S.idStudent INNER JOIN Project P2 on P.Project_idProject = P2.idProject INNER JOIN Project_has_Category Category on P2.idProject = Category.Project_idProject INNER JOIN Supervisor S2 on P2.Supervisor_idInstructor = S2.idInstructor GROUP BY P.Project_idProject";

db.query(query, (err, result) => {
  if (err) console.log(err);
  else {
    data = result;
  }
});

db.query(joinQuery, (err, result) => {
  if (err) console.log(err);
  else {
      console.log(result);
    joinData = result;
  }
});

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index.html", {
    title: " Hello to the react World from the express world"
  });
});

router.post("/send", (req, res) => {
  console.log(req.body.name);
});

router.get("/check", function(req, res, next) {
  res.send(data);
});

router.get("/reqData", (req, res) => {
  res.send(joinData);
});

module.exports = router;
