import React, {Component, Fragment} from 'react';
import "./../../index.css";
import DataTable from "./DataTable";
import RButton from "../../Header/Navbar/RButton";
import red from "@material-ui/core/es/colors/red";

class DisplayProject extends Component {

   render() {
       let heading = ['Year','Project Title','Category','Name','SuperVisor'];
       let data = [{
           "Year" : "2071",
           "Project_Title" : "Decentralized electronic health record system",
           "Category" : "Database",
           "Member" : "Ajaya Mandal",
           "SuperVisor" : "Prof.Dr. Subarna Thapa"
       }];
        return (
            <Fragment>
                <h2>This is where the project list will be displayed.</h2>
                <RButton color={red} buttonText={"Add Project"}/>
                <DataTable heading={heading} data={data}/>

            </Fragment>
        );
    }
}

export default DisplayProject;
