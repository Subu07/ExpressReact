import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/es/Button/Button";
import Typography from "@material-ui/core/es/Typography/Typography";
import theme from "../../theme/theme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

type props = {
    color : any,
    buttonText : string
}

class RButton extends Component <props> {

    render() {
        return (
            <Fragment>
                 <MuiThemeProvider theme={theme(this.props.color)}>
                    <Button color={"primary"} variant={"contained"} size={"small"}
                            onClick={this.props.onClick}
                            style={this.props.style}>
                        {this.props.buttonText}
                    </Button>
                 </MuiThemeProvider>
            </Fragment>
        );
    }
}

export default RButton;
