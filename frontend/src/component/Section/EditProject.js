import React, {Component, Fragment} from 'react';

import Edit from  "@material-ui/icons/Edit";
import teal from "@material-ui/core/es/colors/teal";
import RButton from "../../Header/Navbar/RButton";

class EditProject extends Component {


    render() {
        return (
            <Fragment>
                <RButton color={teal} buttonText={"Edit"}><Edit/></RButton>
            </Fragment>
        );
    }
}

export default EditProject;
