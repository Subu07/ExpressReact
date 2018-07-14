import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import lime from "@material-ui/core/es/colors/lime";
import RButton from "./RButton";
import Modal from "@material-ui/core/es/Modal/Modal";
import Paper from "@material-ui/core/es/Paper/Paper";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import Typography from "@material-ui/core/es/Typography/Typography";
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";

class Student extends Component {
    state = {
        isOpen: false,
        students : []
    };
    handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      });
    };

    handleClose = () => {
        this.setState({
            isOpen: false
        });
    };

    handleOpen = () => {
        this.setState({
            isOpen: true
        });
    };
    componentDidMount() {
      fetch('/studentDisplay')
          .then(res => res.json())
          .then(data => this.setState({students:data}));
};

    render() {

        let headings = this.props.title.map(heading => {
            return (
                <TableCell key = {heading}>
                    <Typography variant={"title"}>{heading}</Typography>
                </TableCell>
            )
        });
        let rows = this.state.students.map(student => {
            return (
                <TableRow key={student.idStudent}>
                    <TableCell>{student.Batch_batch_no}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.roll_no}</TableCell>
                </TableRow>
            )
        });
        return (
            <Fragment>
                <RButton color={lime} buttonText={"Student"} style = {{margin:20}} onClick = {this.handleOpen}/>
                 <Dialog fullWidth={true}
                         open = {this.state.isOpen}
                         onClose={this.handleClose}>
                <Paper elevation={2}>
                    <h2>Student</h2>
                <Table>
                    <TableHead>
                        <TableRow>{headings}</TableRow>
                    </TableHead>
                    <TableBody>{rows}</TableBody>
                </Table>
                </Paper>
                 </Dialog>
                </Fragment>
        );
    }
}

export default Student;
