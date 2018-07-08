import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Modal from "@material-ui/core/es/Modal/Modal";
import Typography from "@material-ui/core/es/Typography/Typography";
import RButton from "../../Header/Navbar/RButton";
import grey from "@material-ui/core/es/colors/grey";

class StudentEntry extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen : false,
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleClose = () => {
        this.setState = {
            isOpen: false
        }
    };
    handleOpen = () => {
          this.setState = {
              isOpen : true
          }
     };

    render() {
        return (
            <Fragment>
                <RButton color={grey} buttonText={"here"} onClick =  {this.state.handleOpen}/>
                <Modal
                    open={this.state.isOpen}
                    onClose={this.handleClose}
                    aria-labelledby = "simple-modal-title"
                    aria-describedby = "simple-modal-description"
                >
                   <Fragment>
                       <Typography variant={"title"} id = "simple-modal-title">
                           Text
                       </Typography>
                       <Typography variant={"headline"} id = "simple-modal-description">
                           Description
                       </Typography>
                   </Fragment>
                </Modal>
            </Fragment>
        );
    }
}

export default StudentEntry;
