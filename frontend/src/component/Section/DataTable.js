import React, {Component, Fragment} from 'react';
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import getData from './Store';

class DataTable extends Component {
    state ={
        data: [],
    };

    componentDidMount(){
        this.setState({
            data: getData()
        })
    }

   render() {
        console.log(this.props.searchField);
        return (
            <Fragment>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Year</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Project Title</TableCell>
                            <TableCell>Student</TableCell>
                            <TableCell>SuperVisor</TableCell>
                            <TableCell>Category</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </Fragment>
        );
    }
}

export default DataTable;
