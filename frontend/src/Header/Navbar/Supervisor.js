import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import lime from "@material-ui/core/es/colors/lime";
import RButton from "./RButton";

class Supervisor extends Component {

    render() {
        return (
           <Fragment>
               <RButton color={lime} buttonText={"Supervisor"} style = {{margin:20}}/>
           </Fragment>
        );
    }
}

export default Supervisor;
