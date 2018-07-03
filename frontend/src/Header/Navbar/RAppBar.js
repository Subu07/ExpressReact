//@flow

import React, {Component, Fragment} from 'react';
import RButton from "./RButton";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import logo from '../../assets/img/logo.png';
import Typography from "@material-ui/core/es/Typography/Typography";
import theme from "../../theme/theme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import "./../../index.css";

type props = {
    title : string,
    color : any,
   AppButtonText : string,
    AppButtonColor : any,
}
class RAppBar extends Component <props> {

    render() {
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
                               <RButton color={this.props.AppButtonColor}
                                        buttonText={this.props.AppButtonText}/>
                           </span>
                       </Toolbar>
                   </AppBar>
                </MuiThemeProvider>
            </Fragment>
        );
    }
}

export default RAppBar;
