import React, {Component, Fragment} from 'react';
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import Typography from "@material-ui/core/es/Typography/Typography";


class DataTable extends Component <props> {
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
           return <TableRow key={row.Roll}>
               <TableCell>{row.Year}</TableCell>
               <TableCell>{row.Project_Title}</TableCell>
               <TableCell>{row.Category}</TableCell>
               <TableCell>{row.Name}</TableCell>
               <TableCell>{row.Roll}</TableCell>
               <TableCell>{row.SuperVisor}</TableCell>
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