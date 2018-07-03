import React, {Component, Fragment} from 'react';
import "./../../index.css";
import DataTable from "./DataTable";
import RButton from "../../Header/Navbar/RButton";
import red from "@material-ui/core/es/colors/red";

class DisplayProject extends Component {
    state = {
        message : 'Hello from state'
    };
    handleChange = (event) => {
        event.preventDefault();
        console.log('The Button was clicked');
        this.setState(this.state = {
            message :'i am clicked'
        });
};
   render() {
        return (
            <Fragment>
                <h2>This is where the project list will be displayed.</h2>
                <RButton color={red} buttonText={"Add Project"} onClick ={this.handleChange}/>
                <DataTable/>
                <button onClick={this.handleChange}>
                <h1>{ this.state.message}</h1>
                </button>
            </Fragment>
        );
    }
}

export default DisplayProject;
