import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import lime from "@material-ui/core/es/colors/lime";
import RButton from "./RButton";
import Modal from "@material-ui/core/es/Modal/Modal";
import Paper from "@material-ui/core/es/Paper/Paper";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import Typography from "@material-ui/core/es/Typography/Typography";
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import AddSupervisor from "../../component/Section/AddSupervisor";
import sortBy from "lodash/sortBy";
import ESupervisor from "../../component/Section/ESupervisor";
import DSupervisor from "../../component/Section/DSupervisor";
import yellow from "@material-ui/core/es/colors/yellow";
import { BrowserRouter, Link } from "react-router-dom";

class Supervisor extends Component {
  state = {
    isOpen: false,
    supervisor: []
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  handleOpen = () => {
    this.setState({
      isOpen: true
    });
  };
  componentDidMount() {
    fetch("/studentDisplay")
      .then(res => res.json())
      .then(data => this.setState({ supervisor: data[1] }));
  }

  render() {
    let headings = (
      <Fragment>
        <TableCell>
          <Typography variant={"title"}>Name</Typography>
        </TableCell>
        <TableCell>
          <Typography variant={"title"}>Action</Typography>
        </TableCell>
      </Fragment>
    );
    let rows = sortBy(this.state.supervisor,"name").map(supervisor => {
      return (
        <TableRow key={supervisor.idInstructor}>
          <TableCell>{supervisor.Title}{supervisor.name}</TableCell>
          <TableCell>
            <ESupervisor data={supervisor} />
            <DSupervisor data={supervisor.idInstructor} />
          </TableCell>
        </TableRow>
      );
    });
    return (
      <Fragment>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <RButton
            color={yellow}
            buttonText={"Back"}
            style={{ marginRight: 20 }}
          />
        </Link>
        <AddSupervisor />
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

export default Supervisor;
