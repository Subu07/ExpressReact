import React, { Component, Fragment } from "react";
import "./../../index.css";
import DataTable from "./DataTable";

class DisplayProject extends Component {

  render() {
    let heading = [
      "Year",
      "Project Title",
      "Category",
      "Student Name",
      "Roll",
      "SuperVisor",
      "Action"
    ];
    return (
      <Fragment>
        <DataTable heading={heading} data={this.props.data}/>
      </Fragment>
    );
  }
}

export default DisplayProject;
