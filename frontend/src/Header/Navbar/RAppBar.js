//@flow

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import RButton from "./RButton";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/es/Typography/Typography";
import theme from "../../theme/theme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

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
                           <IconButton color={"inherit"} aria-label = "Menu">
                               <MenuIcon/>
                           </IconButton>
                           <Typography variant={"display1"} color={"secondary"}>
                               {this.props.title}
                           </Typography>
                           <RButton color={this.props.AppButtonColor} buttonText={this.props.AppButtonText}/>
                       </Toolbar>
                   </AppBar>
                </MuiThemeProvider>
            </Fragment>
        );
    }
}

export default RAppBar;
