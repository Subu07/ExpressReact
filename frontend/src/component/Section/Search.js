import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import red from "@material-ui/core/es/colors/red";
import RButton from "../../Header/Navbar/RButton";
import Divider from "@material-ui/core/Divider";
import AddProject from "./AddProject";
import Clear from "@material-ui/icons/Clear";
import Eye from "@material-ui/icons/Visibility";

import Grid from "@material-ui/core/es/Grid/Grid";
import DisplayProject from "./DisplayProject";
import green from "@material-ui/core/es/colors/green";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supervisor: "",
      category: "",
      batch: "",
      supervisorData: [],
      categoryData: [],
      batchData: [],
      orgData: [],
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  componentDidMount() {
    fetch("/selection")
      .then(res => res.json())
      .then(data =>
        this.setState({
          supervisorData: data[0],
          categoryData: data[1],
          batchData: data[2],
          orgData: data[4],
          data: data[4]
        })
      )
      .catch(err => console.log(err));
  }

  handleView = () => {
    if (
      this.state.category !== "" &&
      (this.state.supervisor !== "" && this.state.batch !== "")
    ) {
      let newData = this.state.orgData.filter(item => {
        return (
          item.category === this.state.category &&
          item.supervisorName === this.state.supervisor &&
          item.year === this.state.batch
        );
      });
      this.setState({
        data: newData
      });
    }
    else if (
      this.state.category !== "" &&
      this.state.supervisor !== ""
    ) {
      let newData = this.state.orgData.filter(item => {
        return (
          item.category === this.state.category &&
          item.supervisorName === this.state.supervisor
        );
      });
      this.setState({
        data: newData
      });
    }
    else if (
      this.state.category !== "" &&
       this.state.batch !== ""
    ) {
      let newData = this.state.orgData.filter(item => {
        return (
          item.category === this.state.category &&
          item.year === this.state.batch
        );
      });
      this.setState({
        data: newData
      });
    }
    else if (
      this.state.supervisor !== "" && this.state.batch !== ""
    ) {
      let newData = this.state.orgData.filter(item => {
        return (
          item.supervisorName === this.state.supervisor &&
          item.year === this.state.batch
        );
      });
      this.setState({
        data: newData
      });
    }
    else if (
      this.state.supervisor !== ""
    ) {
      let newData = this.state.orgData.filter(item => {
        return (
          item.supervisorName === this.state.supervisor
        );
      });
      this.setState({
        data: newData
      });
    }
    else if (
      this.state.batch !== ""
    ) {
      let newData = this.state.orgData.filter(item => {
        return (
          item.year === this.state.batch
        );
      });
      this.setState({
        data: newData
      });
    }
    else if (
      this.state.category
    ) {
      let newData = this.state.orgData.filter(item => {
        return (
          item.category === this.state.category
        );
      });
      this.setState({
        data: newData
      });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClear = () => {
    this.setState({
      supervisor: "",
      category: "",
      batch: "",
      data: this.state.orgData
    });
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={2}>
          <InputLabel>Category:</InputLabel>
          <br />
          <Select
            value={this.state.category}
            onChange={this.handleChange}
            fullWidth={true}
            name={"category"}
          >
            {this.state.categoryData.map(item => (
              <MenuItem value={item.name} key={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
          <Divider />
          <br />
          <br />
          <InputLabel>Supervisors:</InputLabel>
          <br />
          <br />
          <Select
            value={this.state.supervisor}
            onChange={this.handleChange}
            fullWidth={true}
            name={"supervisor"}
          >
            {this.state.supervisorData.map(item => (
              <MenuItem value={item.name} key={item.idInstructor}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
          <Divider />
          <br />
          <br />
          <InputLabel>Year:</InputLabel>
          <br />
          <br />
          <Select
            value={this.state.batch}
            onChange={this.handleChange}
            fullWidth={true}
            name={"batch"}
          >
            {this.state.batchData.map(item => (
              <MenuItem value={item.year} key={item.year}>
                {item.year}
              </MenuItem>
            ))}
          </Select>
          <Divider />
          <br />
          <RButton
            color={green}
            buttonText={"View"}
            style={{ marginTop: 20, marginLeft: 10 }}
            onClick={this.handleView}
          >
            <Eye />
          </RButton>
          <br />
          <RButton
            color={red}
            buttonText={"Reset"}
            style={{ marginTop: 20, marginLeft: 10 }}
            onClick={this.handleClear}
          >
            <Clear />
          </RButton>
          <AddProject/>
        </Grid>
        <Grid item xs={10}>
          <DisplayProject data={this.state.data} />
        </Grid>
      </Grid>
    );
  }
}

export default Search;
