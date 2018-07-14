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

import cyan from "@material-ui/core/es/colors/cyan";
import Edit from "@material-ui/icons/es/Edit";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";

class EditDropDown extends Component {
  state = {
  };
  handleOpen = () => {
    this.setState({
      isOpen: true
    });
  };
  handleClose = () => {
    this.setState({
      isOpen: false,
      number: ""
    });
  };

  handleChange =  event => {
    this.setState({
        [event.target.name] : event.target.value,
    });
  };

  render() {
        return (
          <Fragment>
            <br />
            <InputLabel>{this.props.label}</InputLabel>
            <br />
            <Fragment>
              <InputLabel>Name :</InputLabel>
              <Select
                value={this.props.currentStudent}
                name={[this.props.label]}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
                style={{ marginLeft: 10 }}
              >
                {this.state.allData.map(item =>
                  item.studentName
                    .split(",")
                    .map(name => <MenuItem key={name}>{name}</MenuItem>)
                )}
              </Select>

              <InputLabel>Roll No. :</InputLabel>
              <TextField
                value={stuRoll[0]}
                id={"roll"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
                style={{ marginLeft: 10 }}
              />
              <br />
              <br />
            </Fragment>
            <InputLabel>Student 2</InputLabel>
            <br />
            <Fragment>
              <InputLabel>Name :</InputLabel>
              <TextField
                value={stuName[1]}
                id={"batch"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
                style={{ marginLeft: 10 }}
              />
              <InputLabel>Roll No. :</InputLabel>
              <TextField
                value={stuRoll[1]}
                id={"roll"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
                style={{ marginLeft: 10 }}
              />
              <br />
              <br />
            </Fragment>
            <InputLabel>Student 3</InputLabel>
            <br />
            <Fragment>
              <InputLabel>Name :</InputLabel>
              <TextField
                value={stuName[2]}
                id={"batch"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
                style={{ marginLeft: 10 }}
              />
              <InputLabel>Roll No. :</InputLabel>
              <TextField
                value={stuRoll[2]}
                id={"roll"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
                style={{ marginLeft: 10 }}
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
                style={{ marginLeft: 10 }}
                value={stuName[0]}
                id={"batch"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <InputLabel>Roll No. :</InputLabel>
              <TextField
                style={{ marginLeft: 10 }}
                value={stuRoll[0]}
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
                style={{ marginLeft: 10 }}
                value={stuName[1]}
                id={"batch"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <InputLabel>Roll No. :</InputLabel>
              <TextField
                style={{ marginLeft: 10 }}
                value={stuRoll[1]}
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
                style={{ marginLeft: 10 }}
                value={stuName[2]}
                id={"batch"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <InputLabel>Roll No. :</InputLabel>
              <TextField
                style={{ marginLeft: 10 }}
                value={stuRoll[2]}
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
                style={{ marginLeft: 10 }}
                value={stuName[3]}
                id={"batch"}
                onChange={this.handleChange}
                margin={"normal"}
                autoFocus={true}
                required={true}
              />
              <InputLabel>Roll No. :</InputLabel>
              <TextField
                style={{ marginLeft: 10 }}
                value={stuRoll[3]}
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
    let { projectName, supervisorName, year } = this.state.data;
    return (
      <Fragment>
        <br />
        <RButton
          color={cyan}
          buttonText={"Edit"}
          onClick={this.handleOpen}
          style={{ marginLeft: 10 }}
        >
          <Edit />
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
          <form>
            <Paper elevation={3}>
              <Typography
                variant={"headline"}
                style={{ textAlign: "center", paddingTop: 30 }}
              >
                Edit the details of the project:
              </Typography>
              <br />
              <Grid container spacing={24}>
                <Grid item xs={7}>
                  {stu_num()}
                </Grid>
                <Grid item xs={5}>
                  <InputLabel>Project Name:</InputLabel>
                  <br />
                  <TextField
                    value={projectName}
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
                    value={supervisorName}
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
                    value={year}
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

export default EditDropDown;
