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

class AddProject extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            projectName: "",
            supervisorName: "",
            studentName: [],
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
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

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            projectName: "",
            supervisorName: "",
            studentName: [],
            open: false,
        });
        console.log(this.state)
    };
  render() {
    return (
      <div>
          <RButton color={red} buttonText={"Add Project"} onClick={this.handleClick} style={{marginLeft: 10}}/>
          <Modal open={this.state.open} onClose={this.handleClose}
                 style={{paddingTop: 100, paddingLeft: 400, paddingRight: 400, paddingBottom: 100}}>
              <form onSubmit={this.handleSubmit}>
                <Paper elevation={2}>
                    <Typography variant={"title"} style={{textAlign: 'center', paddingTop: 50}}>
                        Enter Details For New Project:
                    </Typography>
                    <br/>
                    <InputLabel style={{paddingLeft:20}}>Project Name: </InputLabel>
                    <br/>
                    <TextField value={this.state.projectName} style={{paddingLeft:20}}
                               name={"projectName"}
                               required={true}
                               onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <InputLabel style={{paddingLeft:20}}>Student Name: </InputLabel>
                    <br/>
                    <Select style={{marginLeft: 20, width: 180}} multiple={true}
                            value={this.state.studentName}
                            onChange={this.handleChange} name={"studentName"} required={true}>
                        {/*{this.data.map(item => (
                        <MenuItem value={item.name} key={item.id}>{item.name}</MenuItem>
                    ))}*/}
                    </Select>
                    <br/>
                    <br/>
                    <InputLabel style={{paddingLeft:20}}>Supervisor Name: </InputLabel>
                    <br/>
                    <TextField value={this.state.supervisorName} style={{paddingLeft: 20, paddingBottom: 20}}
                               onChange={this.handleChange}
                               name={"supervisorName"} required={true}/>
                    <br/>
                    <RButton color={red} buttonText={"Submit"} type={"submit"} style={{marginLeft:20, marginBottom: 20}}/>
                </Paper>
              </form>
          </Modal>
      </div>
    );
  }
}

export default AddProject;
