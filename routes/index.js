const express = require("express");
const router = express.Router();
const mysql = require("mysql");

let data;
let stuId, proId, supId, nSql, msg;
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
    console.log(err);
  }
  console.log("MySQL connected...");
});

//Queries
query =
  "SELECT * FROM supervisor;SELECT * FROM Category; " +
  "SELECT * FROM Batch; SELECT * FROM Student;" +
  "SELECT P.Project_idProject, GROUP_CONCAT(DISTINCT(S.name)SEPARATOR ',') AS studentName,P2.name AS projectName, GROUP_CONCAT(DISTINCT(S.roll_no)) AS studentRoll, S2.name AS supervisorName, GROUP_CONCAT(DISTINCT(S.Batch_batch_no)) AS year, GROUP_CONCAT(DISTINCT(Category.Category_name)) AS category FROM Project_has_Student P INNER JOIN Student S on P.Student_idStudent = S.idStudent " +
  "INNER JOIN Project P2 on P.Project_idProject = P2.idProject " +
  "INNER JOIN Project_has_Category Category on P2.idProject = Category.Project_idProject " +
  "INNER JOIN Supervisor S2 on P2.Supervisor_idInstructor = S2.idInstructor " +
  "INNER JOIN Batch B on S.Batch_batch_no = B.year GROUP BY P.Project_idProject; ";

db.query(query, (err, result) => {
  if (err) console.log(err);
  else {
    data = result;
  }
});

/* GET home page. */
studentQuery =
  "SELECT * FROM student;SELECT * FROM Supervisor;SELECT * FROM Project;SELECT * FROM BATCH";
router.get("/studentDisplay", (req, res, next) => {
  db.query(studentQuery, (err, results) => {
    if (err) console.log(err);
    console.log("data received from Student Table: ");
    res.send(results);
  });
});

//ADD NEW STUDENT
router.post("/newStudent", (req, res, next) => {
  console.log("1 NEW student has been added");
  let q1 =
    "INSERT INTO student (name, Batch_batch_no, roll_no, Programme_name) VALUES(" +
    "'" +
    req.body.name +
    "'," +
    "'" +
    req.body.batch +
    "'," +
    "'" +
    req.body.roll +
    "'," +
    "'" +
    req.body.programme +
    "')";
  db.query(q1, function(err, result) {
    if (err) console.log(err);
    res.send(JSON.stringify(result));
    console.log(result);
  });
  console.log(req.body);
});

//EDIT STUDENT
router.post("/editStudent", (req, res) => {
  console.log(req.body);
  let edit =
    "UPDATE student SET name = '" +
    req.body.name +
    "',Batch_batch_no = '" +
    req.body.batch +
    "',roll_no = '" +
    req.body.roll +
    "',Programme_name = '" +
    req.body.programme +
    "' WHERE idStudent = '" +
    req.body.id +
    "'";
  db.query(edit, (err, result, fields) => {
    if (err) console.log(err);
    res.send(JSON.stringify(result));
  });
});

//DELETE STUDENT
router.post("/deleteStudent", (req, res) => {
  console.log(req.body.id);
  let sql = "DELETE FROM student WHERE idStudent =" + "'" + req.body.id + "'";
  db.query(sql, (err, result, fields) => {
    if (err) console.log(err);
    res.send(JSON.stringify(result));
    console.log(result);
  });
});

//queries
disp = "SELECT * FROM student;";

//load queries
//select query to display
router.get("/display", (req, res, next) => {
  db.query(disp, (err, results) => {
    if (err) console.log(err);
    console.log("data received from database nodeTutorial:\n");
    console.log(results);
    res.send(JSON.stringify(results));
  });
});

router.get("/displayProject", (req, res, next) => {
  db.query("SELECT * FROM project", (err, results) => {
    if (err) console.log(err);
    console.log("data received from Project Table: ");
    console.log(results);
    res.send(results);
  });
});

router.post("/newProject", (req, res, next) => {
  console.log("1 NEW Project has been added");
  let q2 =
    "INSERT INTO project (name,YearCompleted_year) VALUES(" +
    "'" +
    req.body.name +
    "'," +
    "'" +
    req.body.year +
    "')";
  db.query(q2, function(err, result) {
    if (err) console.log(err);
    res.send(JSON.stringify(result));
    console.log(result);
  });
  console.log(req.body);
});

//EDIT PROJECT
router.post("/editProject", (req, res) => {
  console.log(req.body);
  let edit =
    "UPDATE project SET name = '" +
    req.body.name +
    "',YearCompleted_year = '" +
    req.body.year +
    "' WHERE idProject = '" +
    req.body.id +
    "'";
  db.query(edit, (err, result, fields) => {
    if (err) console.log(err);
    res.send(JSON.stringify(result));
  });
});

//DELETE PROJECT
router.post("/deleteProject", (req, res) => {
  console.log(req.body.id);
  let sql = "DELETE FROM project WHERE idProject =" + "'" + req.body.id + "'";
  db.query(sql, (err, result, fields) => {
    if (err) console.log(err);
    res.send(JSON.stringify(result));
    console.log(result);
  });
  db.query(query, (err, result) => {
    if (err) console.log(err);
    else {
      data = result;
    }
  });
});

router.post("/delete", (req, res) => {
  let sql = `UPDATE project
SET Supervisor_idInstructor = NULL 
WHERE idProject=${req.body.id};DELETE FROM project_has_student
WHERE Project_idProject=${req.body.id}`;
  db.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send(JSON.stringify(result));
    console.log(result);
  });
  db.query(query, (err, result) => {
    if (err) console.log(err);
    else {
      data = result;
    }
  });
});

//GET SUPERVISOR
router.get("/displaySupervisor", (req, res, next) => {
  db.query("SELECT * FROM supervisor", (err, results) => {
    if (err) console.log(err);
    console.log("data received from Supervisor Table: ");
    res.send(results);
  });
});

//ADD SUPERVISOR
router.post("/newSupervisor", (req, res, next) => {
  console.log("1 NEW Supervisor has been added");
  let q2 = "INSERT INTO supervisor (name) VALUES(" + "'" + req.body.name + "')";
  db.query(q2, function(err, result) {
    if (err) console.log(err);
    res.send(JSON.stringify(result));
    console.log(result);
  });
  console.log(req.body);
});

router.post("/editSupervisor", (req, res) => {
  console.log(req.body);
  let edit =
    "UPDATE supervisor SET name = '" +
    req.body.name +
    "' WHERE idInstructor = '" +
    req.body.id +
    "'";
  db.query(edit, (err, result, fields) => {
    if (err) console.log(err);
    res.send(JSON.stringify(result));
  });
});

//DELETE SUPERVISOR
router.post("/deleteSupervisor", (req, res) => {
  console.log(req.body.id);
  let sql =
    "DELETE FROM supervisor WHERE idInstructor =" + "'" + req.body.id + "'";
  db.query(sql, (err, result, fields) => {
    if (err) console.log(err);
    res.send(JSON.stringify(result));
  });
});

router.get("/selection", function(req, res) {
  //console.log(data);
  res.send(data);
});

//Check for the queries
router.get("/simple", function(req, res, next) {
  res.locals.connection.query("select * from project_has_category", function(
    err,
    results,
    fields
  ) {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

//studentProject
router.post("/studentProjectAdd", (req, res) => {
  let sql = `SELECT idStudent FROM student WHERE name IN ('${
    req.body.name1
  }','${req.body.name2}','${req.body.name3}','${
    req.body.name4
  }');SELECT idProject FROM project
WHERE name='${req.body.project}';SELECT idInstructor FROM supervisor
WHERE name='${req.body.supervisor}'`;
  db.query(sql, (err, result) => {
    if (err) console.log(err);
    stuId = result[0];
    proId = result[1];
    supId = result[2];
    console.log(stuId[2].idStudent);
    if (req.body.n === 3) {
      nSql = `INSERT INTO project_has_student(Project_idProject, Student_idStudent)
    VALUES ('${proId[0].idProject}','${stuId[0].idStudent}'),('${
        proId[0].idProject
      }','${stuId[1].idStudent}'),('${proId[0].idProject}','${
        stuId[2].idStudent
      }');UPDATE project
SET Supervisor_idInstructor=${supId[0].idInstructor}
WHERE idProject=${proId[0].idProject}`;
    } else {
      nSql = `INSERT INTO project_has_student(Project_idProject, Student_idStudent)
    VALUES ('${proId[0].idProject}','${stuId[0].idStudent}'),('${
        proId[0].idProject
      }','${stuId[1].idStudent}'),('${proId[0].idProject}','${
        stuId[2].idStudent
      }'),('${proId[0].idProject}','${stuId[3].idStudent}');UPDATE project
SET Supervisor_idInstructor=${supId[0].idInstructor}
WHERE idProject=${proId[0].idProject}`;
    }
    db.query(nSql, (err, result) => {
      if (err) msg = "Duplicate";
      else msg = "Success";
      res.send(JSON.stringify({ result: msg }));
    });
    db.query(query, (err, result) => {
      if (err) console.log(err);
      else {
        data = result;
      }
    });
  });
});

router.post("/studentProjectEdit", (req, res) => {
  let sql = `UPDATE project
SET Supervisor_idInstructor = NULL 
WHERE idProject=${req.body.id};DELETE FROM project_has_student
WHERE Project_idProject=${
    req.body.id
  };SELECT idStudent FROM student WHERE name IN ('${req.body.name1}','${
    req.body.name2
  }','${req.body.name3}','${req.body.name4}');SELECT idProject FROM project
WHERE name='${req.body.project}';SELECT idInstructor FROM supervisor
WHERE name='${req.body.supervisor}'`;

  db.query(sql, (err, result) => {
    if (err) console.log(err);
    stuId = result[2];
    proId = result[3];
    supId = result[4];
    console.log(stuId[2].idStudent);
    if (req.body.n === 3) {
      nSql = `INSERT INTO project_has_student(Project_idProject, Student_idStudent)
    VALUES ('${proId[0].idProject}','${stuId[0].idStudent}'),('${
        proId[0].idProject
      }','${stuId[1].idStudent}'),('${proId[0].idProject}','${
        stuId[2].idStudent
      }');UPDATE project
SET Supervisor_idInstructor=${supId[0].idInstructor}
WHERE idProject=${proId[0].idProject}`;
    } else {
      nSql = `INSERT INTO project_has_student(Project_idProject, Student_idStudent)
    VALUES ('${proId[0].idProject}','${stuId[0].idStudent}'),('${
        proId[0].idProject
      }','${stuId[1].idStudent}'),('${proId[0].idProject}','${
        stuId[2].idStudent
      }'),('${proId[0].idProject}','${stuId[3].idStudent}');UPDATE project
SET Supervisor_idInstructor=${supId[0].idInstructor}
WHERE idProject=${proId[0].idProject}`;
    }
    db.query(nSql, (err, result) => {
      if (err) msg = "Duplicate";
      else msg = "Success";
      res.send(JSON.stringify({ result: msg }));
    });
    db.query(query, (err, result) => {
      if (err) console.log(err);
      else {
        data = result;
      }
    });
  });
});

module.exports = router;
