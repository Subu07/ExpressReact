import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import RAppBar from "./RAppBar";
import blue from "@material-ui/core/es/colors/blue";
import yellow from "@material-ui/core/es/colors/yellow";

class Navbar extends Component {
   render() {
        return (
            <Fragment>
                <RAppBar title={"Major Project"} color={blue} AppButtonText={"Click"} AppButtonColor={yellow}/>
            </Fragment>
        );
    }
}

export default Navbar;
