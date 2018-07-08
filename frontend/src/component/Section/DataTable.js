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
  state = {
    id: 0
  };

  render() {
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
          <Fragment>
            <TableCell>{row.year}</TableCell>
            <TableCell>{row.projectName}</TableCell>
            <TableCell>{row.category}</TableCell>
          </Fragment>
          <TableCell>{row.studentName}</TableCell>
          <TableCell>{row.studentRoll}</TableCell>
          <TableCell>{row.supervisorName}</TableCell>
          <TableCell>
            <EditProject />
            <br />
            <br />
            <DeleteProject />
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
