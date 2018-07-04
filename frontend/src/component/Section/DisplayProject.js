import React, {Component, Fragment} from 'react';
import "./../../index.css";
import DataTable from "./DataTable";

class DisplayProject extends Component {
    state = {
        data:""
    };
    render() {
        return (
            <Fragment>
                <DataTable data={this.state.data} searchField={this.props.searchField}/>
            </Fragment>
        );
    }
}

export default DisplayProject;
