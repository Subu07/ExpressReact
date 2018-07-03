import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Navbar from "../../Header/Navbar/Navbar";
import DisplayProject from "../Section/DisplayProject";
import Search from "../Section/Search";
import red from "@material-ui/core/es/colors/red";
import RButton from "../../Header/Navbar/RButton";
import AddProject from "../Section/AddProject";

class Layout extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <Fragment>
                <Grid container spacing={24}>
                   <Grid item xs ={12}>
                     <Navbar/>
                   </Grid>
                    <Grid item xs = {3}>
                        <Search/>
                    </Grid>
                    <Grid item xs = {9}>
                        <DisplayProject/>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={9}>
                        <AddProject/>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

export default Layout;
