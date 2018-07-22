import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import RButton from "./RButton";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import Typography from "@material-ui/core/es/Typography/Typography";
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import yellow from "@material-ui/core/es/colors/yellow";
import { BrowserRouter, Link } from "react-router-dom";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";
import AddCategory from "./AddCategory";

class Category extends Component {
  state = {
    isOpen: false,
    category: []
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
    fetch("/displayCategory")
      .then(res => res.json())
      .then(data => this.setState({ category: data }));
  }

  render() {
    let headings = (
      <Fragment>
        <TableCell>
          <Typography variant={"title"}>Name</Typography>
        </TableCell>
      </Fragment>
    );
    let rows = this.state.category.map(category => {
      return (
        <TableRow key={category.name}>
          <TableCell>{category.name}</TableCell>
          <TableCell>
            <EditCategory data={category} />
            <DeleteCategory data={category.name} />
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
        <AddCategory />
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

export default Category;
