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
import sortBy from "lodash/sortBy";
import Add from "@material-ui/icons/es/Add";

class EditProject extends Component {
  state = {
    isOpen: false,
    number: 3,
    orgData: "",
    stuData: "",
    supData: "",
    proData: "",
    batData: "",

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
  handleClose = () => {
    this.setState({
      stuData: this.state.orgData,
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
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidUpdate(_, prevState, __) {
    if (this.state.batch !== prevState.batch) {
      if (this.state.batch !== "") {
      const newData = this.state.orgData.filter(
        data => data.Batch_batch_no === this.state.batch
      );
      this.setState({
        stuData: newData
      });
    }}
  }

  componentDidMount() {
    fetch("/studentDisplay")
      .then(res => res.json())
      .then(json =>
        this.setState({
          stuData: json[0],
          supData: json[1],
          proData: json[2],
          batData: json[3],
          orgData: json[0]
        })
      )
      .catch(err => console.log(err));
  }

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
              <Select
                value={this.state.name1}
                name={"name1"}
                onChange={this.handleChange}
                required={true}
                style={{ marginLeft: 10, width: 200 }}
              >
                {sortBy(this.state.stuData, ["name"]).map(item => (
                  <MenuItem value={item.name} key={item.roll_no}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>

              <InputLabel>Roll No. :</InputLabel>
              <Select
                value={this.state.roll1}
                name={"roll1"}
                onChange={this.handleChange}
                required={true}
                style={{ marginLeft: 10, width: 100 }}
              >
                {sortBy(this.state.stuData, ["name"]).map(item => (
                  <MenuItem value={item.roll_no} key={item.roll_no}>
                    {item.roll_no}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <br />
            </Fragment>
            <InputLabel>Student 2</InputLabel>
            <br />
            <Fragment>
              <InputLabel>Name :</InputLabel>
              <Select
                value={this.state.name2}
                name={"name2"}
                onChange={this.handleChange}
                required={true}
                style={{ marginLeft: 10, width: 200 }}
              >
                {sortBy(this.state.stuData, ["name"]).map(item => (
                  <MenuItem value={item.name} key={item.roll_no}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              <InputLabel>Roll No. :</InputLabel>
              <Select
                value={this.state.roll2}
                name={"roll2"}
                onChange={this.handleChange}
                required={true}
                style={{ marginLeft: 10, width: 100 }}
              >
                {sortBy(this.state.stuData, ["name"]).map(item => (
                  <MenuItem value={item.roll_no} key={item.roll_no}>
                    {item.roll_no}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <br />
            </Fragment>
            <InputLabel>Student 3</InputLabel>
            <br />
            <Fragment>
              <InputLabel>Name :</InputLabel>
              <Select
                value={this.state.name3}
                name={"name3"}
                onChange={this.handleChange}
                required={true}
                style={{ marginLeft: 10, width: 200 }}
              >
                {sortBy(this.state.stuData, ["name"]).map(item => (
                  <MenuItem value={item.name} key={item.roll_no}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              <InputLabel>Roll No. :</InputLabel>
              <Select
                value={this.state.roll3}
                name={"roll3"}
                onChange={this.handleChange}
                required={true}
                style={{ marginLeft: 10, width: 100 }}
              >
                {sortBy(this.state.stuData, ["name"]).map(item => (
                  <MenuItem value={item.roll_no} key={item.roll_no}>
                    {item.roll_no}
                  </MenuItem>
                ))}
              </Select>
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
              <Select
                value={this.state.name1}
                name={"name1"}
                onChange={this.handleChange}
                required={true}
                style={{ marginLeft: 10, width: 200 }}
              >
                {sortBy(this.state.stuData, ["name"]).map(item => (
                  <MenuItem value={item.name} key={item.roll_no}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              <InputLabel>Roll No. :</InputLabel>
              <Select
                value={this.state.roll1}
                name={"roll1"}
                onChange={this.handleChange}
                required={true}
                style={{ marginLeft: 10, width: 100 }}
              >
                {sortBy(this.state.stuData, ["name"]).map(item => (
                  <MenuItem value={item.roll_no} key={item.roll_no}>
                    {item.roll_no}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <br />
            </Fragment>
            <InputLabel>Student 2</InputLabel>
            <br />
            <Fragment>
              <InputLabel>Name :</InputLabel>
              <Select
                value={this.state.name2}
                name={"name2"}
                onChange={this.handleChange}
                required={true}
                style={{ marginLeft: 10, width: 200 }}
              >
                {sortBy(this.state.stuData, ["name"]).map(item => (
                  <MenuItem value={item.name} key={item.roll_no}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              <InputLabel>Roll No. :</InputLabel>
              <Select
                value={this.state.roll2}
                name={"roll2"}
                onChange={this.handleChange}
                required={true}
                style={{ marginLeft: 10, width: 100 }}
              >
                {sortBy(this.state.stuData, ["name"]).map(item => (
                  <MenuItem value={item.roll_no} key={item.roll_no}>
                    {item.roll_no}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <br />
            </Fragment>
            <InputLabel>Student 3</InputLabel>
            <br />
            <Fragment>
              <InputLabel>Name :</InputLabel>
              <Select
                value={this.state.name3}
                name={"name3"}
                onChange={this.handleChange}
                required={true}
                style={{ marginLeft: 10, width: 200 }}
              >
                {sortBy(this.state.stuData, ["name"]).map(item => (
                  <MenuItem value={item.name} key={item.roll_no}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              <InputLabel>Roll No. :</InputLabel>
              <Select
                value={this.state.roll3}
                name={"roll3"}
                onChange={this.handleChange}
                required={true}
                style={{ marginLeft: 10, width: 100 }}
              >
                {sortBy(this.state.stuData, ["name"]).map(item => (
                  <MenuItem value={item.roll_no} key={item.roll_no}>
                    {item.roll_no}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <br />
            </Fragment>
            <InputLabel>Student 4</InputLabel>
            <br />
            <Fragment>
              <InputLabel>Name :</InputLabel>
              <Select
                value={this.state.name4}
                name={"name4"}
                onChange={this.handleChange}
                required={true}
                style={{ marginLeft: 10, width: 200 }}
              >
                {sortBy(this.state.stuData, ["name"]).map(item => (
                  <MenuItem value={item.name} key={item.roll_no}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              <InputLabel>Roll No. :</InputLabel>
              <Select
                value={this.state.roll4}
                name={"roll4"}
                onChange={this.handleChange}
                required={true}
                style={{ marginLeft: 10, width: 100 }}
              >
                {sortBy(this.state.stuData, ["name"]).map(item => (
                  <MenuItem value={item.roll_no} key={item.roll_no}>
                    {item.roll_no}
                  </MenuItem>
                ))}
              </Select>
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
          buttonText={"AddProject"}
          onClick={this.handleOpen}
          style={{ marginLeft: 10 }}
        >
          <Add />
        </RButton>
        <Modal
          open={this.state.isOpen}
          onClose={this.handleClose}
          style={{
            paddingTop: 50,
            paddingLeft: 50,
            paddingRight: 50,
            paddingBottom: 50
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <Paper elevation={3}>
              <Typography
                variant={"headline"}
                style={{ textAlign: "center", paddingTop: 30 }}
              >
                Add the details of the project:
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
                  <Select
                    value={this.state.project}
                    name={"project"}
                    onChange={this.handleChange}
                    required={true}
                    style={{ marginLeft: 5 }}
                  >
                    {sortBy(this.state.proData, ["name"]).map(item => (
                      <MenuItem value={item.name} key={item.idProject}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <br />
                  <br />
                  <InputLabel>SuperVisor:</InputLabel>
                  <br />
                  <Select
                    value={this.state.supervisor}
                    name={"supervisor"}
                    onChange={this.handleChange}
                    required={true}
                    style={{ marginLeft: 5 }}
                  >
                    {sortBy(this.state.supData, ["name"]).map(item => (
                      <MenuItem value={item.name} key={item.idInstructor}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <br />
                  <br />
                  <InputLabel>Batch:</InputLabel>
                  <br />
                  <Select
                    value={this.state.batch}
                    name={"batch"}
                    onChange={this.handleChange}
                    required={true}
                    style={{ marginLeft: 5 }}
                  >
                    {sortBy(this.state.batData, ["year"]).map(item => (
                      <MenuItem value={item.year} key={item.year}>
                        {item.year}
                      </MenuItem>
                    ))}
                  </Select>
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

export default EditProject;
