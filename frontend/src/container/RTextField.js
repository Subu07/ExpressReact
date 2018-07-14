import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/es/TextField/TextField";

type props = {
    id: any,
    value:any,
    name : string,
    required: boolean,
    focus: boolean,
    onChange: any,
    autoFocus: boolean,
    required: boolean,
    margin: any
}
class RTextfield extends Component<props> {


    render() {
        return (
            <Fragment>
                <TextField
                value={this.props.value}
                name={this.props.name}
                id={this.props.id}
                onChange={this.props.onChange}
                margin={this.props.margin}
                autoFocus={true}
                required={true}
              />
            </Fragment>
        );
    }
}

export default RTextfield;
