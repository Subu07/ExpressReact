import React, {Component} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import red from "@material-ui/core/es/colors/red";
import amber from "@material-ui/core/es/colors/amber";

const theme = (color) => createMuiTheme({
    palette : {
        primary : color,
        secondary : amber,
    }
});

export default theme;
