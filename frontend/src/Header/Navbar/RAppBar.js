//@flow

import React, { Component, Fragment } from "react";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import logo from "../../assets/img/logo.png";
import Typography from "@material-ui/core/es/Typography/Typography";
import theme from "../../theme/theme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import "./../../index.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Project from "./Project";
import Student from "./Student";
import Supervisor from "./Supervisor";
import RButton from "./RButton";
import yellow from "@material-ui/core/es/colors/yellow";

type props = {
  title: string,
  color: any,
  AppButtonText: string,
  AppButtonColor: any
};
class RAppBar extends Component<props> {
  handleClick = () => {
    window.location.reload();
  };
  render() {
    return (
      <Fragment>
        <MuiThemeProvider theme={theme(this.props.color)}>
          <AppBar position={"static"}>
            <Toolbar>
              <img src={logo} height={80} />
              <Typography variant={"display1"} color={"inherit"}>
                {this.props.title}
              </Typography>
                <span style={{ marginLeft: "auto" }}>
                  <Link to={"/project"} style={{ textDecoration: "none" }}>
                    <RButton
                      color={yellow}
                      buttonText={"Project"}
                      style={{ marginRight: 20 }}
                    />
                  </Link>
                  <Link to={"/student"} style={{ textDecoration: "none" }}>
                    <RButton
                      color={yellow}
                      buttonText={"Student"}
                      style={{ marginRight: 20 }}
                    />
                  </Link>
                  <Link to={"/supervisor"} style={{ textDecoration: "none" }}>
                    <RButton
                      color={yellow}
                      buttonText={"Supervisor"}
                      style={{ marginRight: 20 }}
                    />
                  </Link>
                  <Link to={"/category"} style={{ textDecoration: "none" }}>
                    <RButton
                      color={yellow}
                      buttonText={"Category"}
                      style={{ marginRight: 20 }}
                    />
                  </Link>
                </span>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default RAppBar;
