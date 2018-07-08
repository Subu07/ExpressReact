import React, {Component, Fragment} from 'react';
import Grid from "@material-ui/core/es/Grid/Grid";
import Navbar from "../../Header/Navbar/Navbar";
import DisplayProject from "../Section/DisplayProject";
import Search from "../Section/Search";
import AddProject from "../Section/AddProject";

class Layout extends Component {
    constructor(props){
        super(props);
    }
    state = {
        info:"",
        buttonPressed : false,
        searchField: []
    };

    getData = (category, supervisor, year) => {
        this.setState({
            searchField : [category, supervisor, year],
        });
    };

    render() {
        return (
            <Fragment>
                <Grid container spacing={8}>
                   <Grid item xs ={12}>
                     <Navbar clearData={this.clearData}/>
                   </Grid>
                    <Grid item xs = {2}>
                        <Search getData={this.getData} />
                    </Grid>
                    <Grid item xs = {10}>
                        <DisplayProject searchField={this.state.searchField}/>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

export default Layout;
