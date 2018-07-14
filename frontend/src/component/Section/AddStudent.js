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
import lime from "@material-ui/core/es/colors/lime";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";

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
            programme: '',
            isOpen: false,
          });
            event.preventDefault();
            window.location.reload();
        };

    render() {
        return (
            <Fragment>
               <RButton color={lime} buttonText={"Add User"} onClick = {this.handleOpen}/>
                <Modal open = {this.state.isOpen} onClose={this.handleClose} style={{paddingTop:100,paddingLeft:200,paddingRight:200,paddingBottom:100}}>
                <Paper elevation={2}>
                <form onSubmit={this.handleSubmit}>
                        <Typography variant={"headline"} style={{textAlign: "center"}}>
                            Fill the Student Form:
                        </Typography>

                     <InputLabel>Batch: </InputLabel>
                   <Select
                    name={"batch"}
                    value={this.state.batch}
                    onChange={this.handleChange}
                    style={{ textAlign: "center" }}
                  >
                    <MenuItem value={2070}>2070</MenuItem>
                    <MenuItem value={2071}>2071</MenuItem>
                  </Select><br/>
                     <InputLabel>Programme: </InputLabel>
                   <Select
                    name={"programme"}
                    value={this.state.programme}
                    onChange={this.handleChange}
                    style={{ textAlign: "center" }}
                  >
                    <MenuItem value={"BCT"}>BCT</MenuItem>
                    <MenuItem value={"BEX"}>BEX</MenuItem>
                  </Select><br/>
                     <br/>
                    <InputLabel>Name:</InputLabel>
                    <RTextfield value={this.state.name} name={"Name"} required={true} autoFocus={true} onChange = {this.handleChange}/><br/><br/>

                    <InputLabel>Roll No:</InputLabel>
                    <RTextfield value={this.state.roll} name={"roll"} required={true} focus={true} onChange={this.handleChange} helperText="e.g. 070BCT500"/><br/><br/>

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
