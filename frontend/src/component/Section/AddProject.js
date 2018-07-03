import React, {
  Component,
} from 'react';
import RButton from "../../Header/Navbar/RButton";
import red from "@material-ui/core/es/colors/red";
import Modal from "@material-ui/core/es/Modal/Modal";
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/es/Paper/Paper";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import TextField from "@material-ui/core/es/TextField/TextField";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";

class AddProject extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            projectName: "",
            supervisorName: "",
            studentName: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
        console.log(this.state)
    };

    handleClick = () => {
        this.setState({
            open: true
        });
    };

    handleClose = () => {
        this.setState({
            open: false
        })
    };
  render() {
    return (
      <div>
          <RButton color={red} buttonText={"Add Project"} onClick={this.handleClick}/>
          <Modal open={this.state.open} onClose={this.handleClose}
                 style={{paddingTop: 100, paddingLeft: 100, paddingRight: 100, paddingBottom: 100}}>
              <form>
                <Paper elevation={2}>
                    <Typography variant={"title"} style={{textAlign: 'center', paddingTop: 50}}>
                        Enter Details For New Project:
                    </Typography>
                    <br/>
                    <InputLabel style={{paddingLeft:20}}>Project Name: </InputLabel>
                    <br/>
                    <TextField value={this.state.projectName} style={{paddingLeft:20}}
                               name={"projectName"}
                               onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <InputLabel style={{paddingLeft:20}}>Student Name: </InputLabel>
                    <br/>
                    <Select style={{marginLeft: 20, width: 180}} value={this.state.studentName} onChange={this.handleChange} name={"studentName"}>
                        {/*{this.data.map(item => (
                        <MenuItem value={item.name} key={item.id}>{item.name}</MenuItem>
                    ))}*/}
                    </Select>
                    <br/>
                    <br/>
                    <InputLabel style={{paddingLeft:20}}>Supervisor Name: </InputLabel>
                    <br/>
                    <TextField value={this.state.supervisorName} style={{paddingBottom: 50, paddingLeft: 20}}
                               onChange={this.handleChange}
                               name={"supervisorName"}/>
                </Paper>
              </form>
          </Modal>
      </div>
    );
  }
}

export default AddProject;
