import React, { Component, Fragment } from "react";

import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import Typography from "@material-ui/core/es/Typography/Typography";
import DeleteProject from "./DeleteProject";
import EditProject from "./EditProject";

class DataTable extends Component {

  render() {
      console.log(this.props.data);
    let headings = this.props.heading.map(heading => {
      return (
        <TableCell key={heading}>
          <Typography variant={"title"}>{heading}</Typography>
        </TableCell>
      );
    });
    let rows = this.props.data.map(row => {
      return (
        <TableRow key={row.Project_idProject}>
          <TableCell>{row.year}</TableCell>
          <TableCell>{row.projectName}</TableCell>
          <TableCell>{row.category}</TableCell>
          <TableCell>
            {row.studentName.split(",").map(name => (
              <div key={name}>
                <br />
                {name}
              </div>
            ))}
          </TableCell>
          <TableCell>
            {row.studentRoll.split(",").map(roll => (
              <div style={{ textAlign: "left" }} key={roll}>
                <br />
                <br />
                {roll}
              </div>
            ))}
          </TableCell>
          <TableCell>{row.supervisorName}</TableCell>
          <TableCell>
            <EditProject data={row}/>
            <br />
            <br />
            <DeleteProject data={row.Project_idProject} />
          </TableCell>
        </TableRow>
      );
    });
    return (
      <Fragment>
        <Table>
          <TableHead>
            <TableRow>{headings}</TableRow>
          </TableHead>
          <TableBody>{rows}</TableBody>
        </Table>
      </Fragment>
    );
  }
}

export default DataTable;
//.then(json => sortBy(json,'projectName'))