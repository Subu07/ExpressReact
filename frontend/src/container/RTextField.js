import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/es/TextField/TextField";

type props = {
    value:any,
    name : string,
    required: boolean,
    focus: boolean,
    onChange: any
}
class RTextfield extends Component<props> {


    render() {
        return (
            <Fragment>
                <TextField value={this.props.value}
                           required={this.props.required}
                           autoFocus={this.props.focus}
                           onChange={this.props.onChange}
                           name={this.props.name}
                           helperText={this.props.helperText}
                style={this.props.style}/>
            </Fragment>
        );
    }
}

export default RTextfield;
