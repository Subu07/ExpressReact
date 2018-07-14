import React, {Component, Fragment} from 'react';
import RAppBar from "./RAppBar";
import blue from "@material-ui/core/es/colors/blue";
import yellow from "@material-ui/core/es/colors/yellow";
import RButton from "./RButton";
import green from "@material-ui/core/es/colors/green";

class Navbar extends Component {
   render() {
        return (
            <Fragment>
                <RAppBar title={"B.E. Major Project"} color={blue} AppButtonText={"Clear"} AppButtonColor={yellow}/>
            </Fragment>
        );
    }
}

export default Navbar;
