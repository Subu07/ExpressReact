import React, {Component, Fragment} from 'react';
import RAppBar from "./RAppBar";
import blue from "@material-ui/core/es/colors/blue";

class Navbar extends Component {
   render() {
        return (
            <Fragment>
                <RAppBar title={"B.E. Major Project"} color={blue} />
            </Fragment>
        );
    }
}

export default Navbar;
