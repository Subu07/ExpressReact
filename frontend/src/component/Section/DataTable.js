import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import Typography from "@material-ui/core/es/Typography/Typography";


class DataTable extends Component {
   render() {
        let headings= this.props.heading.map((heading)=> {
            return(
                <TableCell key={heading}>
                    <Typography variant={"title"}>
                        {heading}
                     </Typography>
                </TableCell>
            )
        });
        let rows = this.props.data.map((row)=> {
           return <TableRow key ={row.roll_no+row.studentName}>
               <TableCell>{row.year}</TableCell>
               <TableCell>{row.projectName}</TableCell>
               <TableCell>{row.Category_name}</TableCell>
               <TableCell>{row.studentName}</TableCell>
               <TableCell>{row.roll_no}</TableCell>
               <TableCell>{row.supervisorName}</TableCell>
           </TableRow>
        });
       return(
            <Fragment>
                <Table>
                    <TableHead>
                        <TableRow>
                        {headings}
                        </TableRow>
                    </TableHead>
                        <TableBody>
                            {rows}
                        </TableBody>
                </Table>
            </Fragment>
        );
    }

}

export default DataTable;
