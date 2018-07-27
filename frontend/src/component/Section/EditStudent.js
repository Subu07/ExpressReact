import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import RTextfield from "../../container/RTextField";
import RButton from "../../Header/Navbar/RButton";
import Typography from "@material-ui/core/es/Typography/Typography";
import Modal from "@material-ui/core/es/Modal/Modal";
import Paper from "@material-ui/core/es/Paper/Paper";
import green from "@material-ui/core/es/colors/green";
import TextField from "@material-ui/core/es/TextField/TextField";
import red from "@material-ui/core/es/colors/red";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import Select from "@material-ui/core/es/Select/Select";

class EditStudent extends Component {
    state = {
      isOpen: false,
      students: [],
      name: "",
      roll: "",
      batch: "",
      programme: "",
      id: ""
    };

    handleOpen = () => {
          this.setState({
                isOpen: true,
                student: this.props.data,
                name : this.props.data.name,
                roll: this.props.data.roll_no,
                batch: this.props.data.Batch_batch_no,
                programme: this.props.data.Programme_name,
                id: this.props.data.idStudent
          })
        };
    handleClose = (student) => {
          this.setState({
            isOpen: false,
          })
        };
    handleEdit = (event) => {
            let data = {
              name : this.state.name,
                roll: this.state.roll,
                batch: this.state.batch,
                programme: this.state.programme,
                id: this.state.id
          };
            event.preventDefault();
            fetch("/editStudent",{
            method: 'POST',
            headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
        }).then(res=>console.log(res))
        .catch(err=>console.log(err));
            this.setState({
                isOpen : false
            });
            window.location.reload();
        };
     handleChange = event => {
          this.setState({[event.target.name]: event.target.value});
        };

      componentDidMount(){
      fetch('/studentDisplay')
          .then(res => res.json())
          .then(data => {
              this.setState({
                  student: data[0]
              });
          })
          .catch(err => console.log('caught error',err))
    };


    render() {
        return (
            <Fragment>
                <RButton color={green} buttonText={"EDIT"} onClick = {this.handleOpen}/>
                <Modal open = {this.state.isOpen} onClose={this.handleClose} style={{paddingTop:100,paddingLeft:200,paddingRight:200,paddingBottom:100}}>
                <Paper elevation={2}>
                    <form onSubmit={this.handleEdit}>
                        <Typography variant={"headline"} style={{textAlign: "center"}}>
                            Edit the User Form:
                        </Typography>
                        <InputLabel>Batch</InputLabel>
                         <Select
                name={"batch"}
                value={this.state.batch}
                onChange={this.handleChange}
                style={{ textAlign: "center", width:200 }}
              >
                <MenuItem value={2070}>2070</MenuItem>
                <MenuItem value={2071}>2071</MenuItem>
              </Select>
              <br />
                <br/>
              <InputLabel>Programme: </InputLabel>
              <Select
                name={"programme"}
                value={this.state.programme}
                onChange={this.handleChange}
                style={{ textAlign: "center", width:200 }}
              >
                <MenuItem value={"BCT"}>BCT</MenuItem>
                <MenuItem value={"BEX"}>BEX</MenuItem>
              </Select>
              <br />
              <br />
              <InputLabel>Name:</InputLabel>
              <RTextfield
                value={this.state.name}
                name={"name"}
                required={true}
                focus={true}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <InputLabel>Roll No:</InputLabel>
              <RTextfield
                value={this.state.roll}
                name={"roll"}
                required={true}
                focus={true}
                onChange={this.handleChange}
                helperText="e.g. 070BCT500"
              />
              <br />
              <br />

              <RButton
                color={green}
                buttonText={"Submit"}
                onClick={this.handleEdit}
                style={{marginLeft:20, marginBottom:20}}
              />
              <RButton
                color={red}
                buttonText={"Cancel"}
                onClick={this.handleClose}
                style={{marginLeft: 500,marginBottom: 20}}
              />
                </form>
                    {console.log.data}
                </Paper>
                </Modal>
            </Fragment>
        );
    }
}

export default EditStudent;
