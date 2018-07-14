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
import AddSupervisor from "../../component/Section/AddSupervisor";
import red from "@material-ui/core/es/colors/red";
import green from "@material-ui/core/es/colors/green";
import AProject from "../../component/Section/AProject";

class Project extends Component {
    state = {
        isOpen: false,
        project : [],
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
        window.location.reload();
    };

    handleOpen = () => {
        this.setState({
            isOpen: true
        });
    };
    componentDidMount() {
      fetch('/studentDisplay')
          .then(res => res.json())
          .then(data => this.setState({project:data[2]}));
};

    render() {

        let headings =
            <Fragment>
                <TableCell>
                    <Typography variant={"title"}>Name</Typography>
                </TableCell>
                    <TableCell>
                        <Typography variant={"title"}>Completion Year</Typography>
                    </TableCell>
                <TableCell>
                        <Typography variant={"title"}>Action</Typography>
                    </TableCell>
            </Fragment>;
        let rows = this.state.project.map(project => {
            return (
                <TableRow key={project.idProject}>
                    <TableCell>{project.name}</TableCell>
                    <TableCell>{project.Completed_year}</TableCell>
                    <TableCell>
                        <RButton color={green} buttonText={"EDIT"}/>
                        <RButton color={red} buttonText={"DELETE"}/>
                    </TableCell>
                </TableRow>
            )
        });
        return (
            <Fragment>
                <RButton color={lime} buttonText={"Project"} onClick = {this.handleOpen} style={{marginRight:20}}/>
                 <Dialog fullWidth={false}
                         open = {this.state.isOpen}
                         onClose={this.handleClose}>
                <Paper elevation={2}>
                    <AProject />
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

export default Project;
