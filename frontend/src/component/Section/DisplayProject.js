import React, {Component, Fragment} from 'react';
import "./../../index.css";
import DataTable from "./DataTable";
import RButton from "../../Header/Navbar/RButton";
import red from "@material-ui/core/es/colors/red";

class DisplayProject extends Component {

    render() {
        return (
            <Fragment>
                <h2>This is where the project list will be displayed.</h2>
                <RButton color={red} buttonText={"Add Project"}/>
                <DataTable/>
            </Fragment>
        );
    }
}

export default DisplayProject;
