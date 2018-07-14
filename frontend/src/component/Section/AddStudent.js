import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import TextField from "@material-ui/core/es/TextField/TextField";
import RButton from "../../Header/Navbar/RButton";
import Modal from "@material-ui/core/es/Modal/Modal";
import Paper from "@material-ui/core/es/Paper/Paper";
import cyan from "@material-ui/core/es/colors/cyan";
import Typography from "@material-ui/core/es/Typography/Typography";
import green from "@material-ui/core/es/colors/green";
import red from "@material-ui/core/es/colors/red";
import RTextfield from "../../container/RTextField";

class AddStudent extends Component {
    state = {
        student: [],
        name: '',
        roll: '',
        batch: '',
        isOpen: false,
    };
     handleOpen = () => {
            this.setState({
                isOpen: true
            })
        };
         handleClose = () => {
            this.setState({
                isOpen: false
            })
        };
        handleChange = event => {
          this.setState({[event.target.name]: event.target.value});
        };

        handleSubmit = event => {
          let data = {
              name: this.state.name,
              batch: this.state.batch,
              roll: this.state.roll,
          };
          console.log(data);
          fetch('/newStudent', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data)
          })
              .then(response =>response.json())
              .catch(err=>console.log(err));
          this.setState({
            name: '',
            roll: '',
            batch: '',
            isOpen: false,
          });
            event.preventDefault();
            window.location.reload();
        };

    render() {
        return (
            <Fragment>
               <RButton color={cyan} buttonText={"ADD User"} onClick = {this.handleOpen}/>
                <Modal open = {this.state.isOpen} onClose={this.handleClose} style={{paddingTop:100,paddingLeft:200,paddingRight:200,paddingBottom:100}}>
                <Paper elevation={2}>
                <form onSubmit={this.handleSubmit}>
                        <Typography variant={"headline"} style={{textAlign: "center"}}>
                            Fill the Student Form:
                        </Typography>
                        <InputLabel>Name:</InputLabel>
                    <RTextfield id={} value={} name={} required={} focus={} onChange={} autoFocus={} margin={}/>
                    <RButton color={green} buttonText={"submit"} onClick = {this.handleSubmit}/>
                    <RButton color={red} buttonText={"Cancel"} onClick = {this.handleClose}/>
                </form>
                </Paper>
                </Modal>
            </Fragment>
        );
    }
}

export default AddStudent;
