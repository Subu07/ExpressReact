import React, { Component, Fragment } from "react";

import RButton from "../../Header/Navbar/RButton";
import red from "@material-ui/core/es/colors/red";
import Modal from "@material-ui/core/es/Modal/Modal";
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/es/Paper/Paper";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import TextField from "@material-ui/core/es/TextField/TextField";
import green from "@material-ui/core/es/colors/green";
import Grid from "@material-ui/core/es/Grid/Grid";
import Select from "@material-ui/core/es/Select/Select";

import cyan from "@material-ui/core/es/colors/cyan";
import Add from "@material-ui/icons/es/Add";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";

class AddProject extends Component {
  state = {
    isOpen: false,
    number: "",
    name1: "",
    name2: "",
    name3: "",
    name4: "",
    roll1: "",
    roll2: "",
    roll3: "",
    roll4: "",
    project: "",
    supervisor: "",
    batch: ""
  };
  handleOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleSubmit = event => {
    fetch("/addProject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name1: this.state.name1,
        name2: this.state.name2,
        name3: this.state.name3,
        name4: this.state.name4,
        roll1: this.state.roll1,
        roll2: this.state.roll2,
        roll3: this.state.roll3,
        roll4: this.state.roll4,
        project: this.state.project,
        supervisor: this.state.supervisor,
        batch: this.state.batch
      })
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    this.setState({
      isOpen: false,
      number: "",
      name1: "",
      name2: "",
      name3: "",
      name4: "",
      roll1: "",
      roll2: "",
      roll3: "",
      roll4: "",
      project: "",
      supervisor: "",
      batch: ""
    });
    event.preventDefault();
  };

  handleClose = () => {
    this.setState({
        isOpen: false,
        number: "",
        name1: "",
        name2: "",
        name3: "",
        name4: "",
        roll1: "",
        roll2: "",
        roll3: "",
        roll4: "",
        project: "",
        supervisor: "",
        batch: ""
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    let stu_num = () => {
      let check = this.state.number;
      if (check === 3) {
        return (
          <Fragment>
            <br />
            <InputLabel>Student 1</InputLabel>
            <br />
            <Fragment>
              <InputLabel>Name :</InputLabel>
              <TextField
                value={this.state.name1}
                name={"name1"}
                id={"batch"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <InputLabel>Roll No. :</InputLabel>
              <TextField
                value={this.state.roll1}
                name={"roll1"}
                id={"roll"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <br />
              <br />
            </Fragment>
            <InputLabel>Student 2</InputLabel>
            <br />
            <Fragment>
              <InputLabel>Name :</InputLabel>
              <TextField
                value={this.state.name2}
                name={"name2"}
                id={"batch"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <InputLabel>Roll No. :</InputLabel>
              <TextField
                value={this.state.roll2}
                name={"roll2"}
                id={"roll"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <br />
              <br />
            </Fragment>
            <InputLabel>Student 3</InputLabel>
            <br />
            <Fragment>
              <InputLabel>Name :</InputLabel>
              <TextField
                value={this.state.name3}
                name={"name3"}
                id={"batch"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <InputLabel>Roll No. :</InputLabel>
              <TextField
                value={this.state.roll3}
                name={"roll3"}
                id={"roll"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <br />
              <br />
            </Fragment>
          </Fragment>
        );
      } else if (check === 4) {
        return (
          <Fragment>
            <br />
            <InputLabel variant={"title"}>Student 1</InputLabel>
            <br />
            <Fragment>
              <InputLabel>Name :</InputLabel>
              <TextField
                value={this.state.name1}
                name={"name1"}
                id={"batch"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <InputLabel>Roll No. :</InputLabel>
              <TextField
                value={this.state.roll1}
                name={"roll1"}
                id={"roll"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <br />
              <br />
            </Fragment>
            <InputLabel>Student 2</InputLabel>
            <br />
            <Fragment>
              <InputLabel>Name :</InputLabel>
              <TextField
                value={this.state.name2}
                name={"name2"}
                id={"batch"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <InputLabel>Roll No. :</InputLabel>
              <TextField
                value={this.state.roll2}
                name={"roll2"}
                id={"roll"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <br />
              <br />
            </Fragment>
            <InputLabel>Student 3</InputLabel>
            <br />
            <Fragment>
              <InputLabel>Name :</InputLabel>
              <TextField
                value={this.state.name3}
                name={"name3"}
                id={"batch"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <InputLabel>Roll No. :</InputLabel>
              <TextField
                value={this.state.roll3}
                name={"roll3"}
                id={"roll"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <br />
              <br />
            </Fragment>
            <InputLabel>Student 4</InputLabel>
            <br />
            <Fragment>
              <InputLabel>Name :</InputLabel>
              <TextField
                value={this.state.name4}
                name={"name4"}
                id={"batch"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <InputLabel>Roll No. :</InputLabel>
              <TextField
                value={this.state.roll4}
                name={"roll4"}
                id={"roll"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <br />
              <br />
            </Fragment>
          </Fragment>
        );
      }
    };
    return (
      <Fragment>
        <br />
        <RButton
          color={cyan}
          buttonText={"Add Project"}
          onClick={this.handleOpen}
          style={{ marginLeft: 10, marginTop: 20 }}
        >
          <Add />
        </RButton>
        <Modal
          open={this.state.isOpen}
          onClose={this.handleClose}
          style={{
            paddingTop: 50,
            paddingLeft: 200,
            paddingRight: 200,
            paddingBottom: 50
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <Paper elevation={3}>
              <Typography
                variant={"headline"}
                style={{ textAlign: "center", paddingTop: 30 }}
              >
                Enter the details of the project:
              </Typography>
              <br />
              <Grid container spacing={24}>
                <Grid item xs={7}>
                  <InputLabel>Number of Student: </InputLabel>
                  <Select
                    name={"number"}
                    value={this.state.number}
                    onChange={this.handleChange}
                    style={{ textAlign: "center" }}
                  >
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                  {stu_num()}
                </Grid>
                <Grid item xs={5}>
                  <InputLabel>Project Name:</InputLabel>
                  <br />
                  <TextField
                    value={this.state.project}
                    name={"project"}
                    style={{ width: 300 }}
                    id={"project_name"}
                    onChange={this.handleChange}
                    margin={"normal"}
                    autoFocus={true}
                    required={true}
                  />
                  <br />
                  <br />
                  <InputLabel>SuperVisor:</InputLabel>
                  <br />
                  <TextField
                    value={this.state.supervisor}
                    name={"supervisor"}
                    style={{ width: 300 }}
                    id={"supervisor"}
                    onChange={this.handleChange}
                    margin={"normal"}
                    autoFocus={true}
                    required={true}
                  />
                  <br />
                  <br />
                  <InputLabel>Batch:</InputLabel>
                  <br />
                  <TextField
                    value={this.state.batch}
                    name={"batch"}
                    style={{ width: 300 }}
                    id={"batch"}
                    onChange={this.handleChange}
                    margin={"normal"}
                    autoFocus={true}
                    required={true}
                  />
                  <br />
                  <br />
                  <br />
                  <span>
                    <RButton
                      color={green}
                      buttonText={"Submit"}
                      style={{ marginRight: "auto" }}
                      type={"submit"}
                      onClick = {this.handleSubmit}
                    />
                  </span>
                  <span>
                    <RButton
                      color={red}
                      buttonText={"Cancel"}
                      onClick={this.handleClose}
                      style={{ marginLeft: 200 }}
                    />
                  </span>
                </Grid>
              </Grid>
            </Paper>
          </form>
        </Modal>
      </Fragment>
    );
  }
}

export default AddProject;
