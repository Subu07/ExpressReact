//@flow

import React, {Component, Fragment} from 'react';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import logo from '../../assets/img/logo.png';
import Typography from "@material-ui/core/es/Typography/Typography";
import theme from "../../theme/theme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import "./../../index.css";
import RButton from "./RButton";
import green from "@material-ui/core/es/colors/green";
import teal from "@material-ui/core/es/colors/teal";
import lime from "@material-ui/core/es/colors/lime";
import Project from "./Project";
import Student from "./Student";
import Supervisor from "./Supervisor";

type props = {
    title : string,
    color : any,
   AppButtonText : string,
    AppButtonColor : any,
}
class RAppBar extends Component <props> {

    render() {
        let heading = [
      "Batch",
      "Name",
      "Roll No",
      "Action"
     ];
        return (
            <Fragment>
                <MuiThemeProvider theme={theme(this.props.color)}>
                   <AppBar position={"static"}>
                       <Toolbar>
                           <img src={logo} height={80}/>
                           <Typography variant={"display1"} color={"inherit"}>
                               {this.props.title}
                           </Typography>
                           <span style={{marginLeft: 'auto'}}>
                           </span>
                           <Project/>
                           <Student title = {heading}/>
                           <span style={{marginLeft:20}}>
                               <Supervisor/>
                           </span>
                       </Toolbar>
                   </AppBar>
                </MuiThemeProvider>
            </Fragment>
        );
    }
}

export default RAppBar;
