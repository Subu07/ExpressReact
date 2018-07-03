import React, {Component, Fragment} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            supervisor: "",
            category: "",
            year: "",
        }
    }
    data = [{id: 1, name:"Ravi"},{id: 2, name:"Sujan"}];
    render() {
        return (
            <Fragment>
                <InputLabel>Category:</InputLabel>
                <br/>
                <Select value={this.state.category} onChange={this.handleChange} fullWidth={true}>
                    {this.data.map(item => (
                        <MenuItem value={item.name} key={item.id}>{item.name}</MenuItem>
                    ))}
                </Select>
                <br/>
                <br/>
                <br/>
                <InputLabel>Supervisors:</InputLabel>
                <br/>
                <Select value={this.state.supervisor} onChange={this.handleChange} fullWidth={true}>
                    {this.data.map(item => (
                        <MenuItem value={item.name} key={item.id}>{item.name}</MenuItem>
                    ))}
                </Select>
                <br/>
                <br />
                <br/>
                <InputLabel>Year:</InputLabel>
                <br/>
                <Select value={this.state.year} onChange={this.handleChange} fullWidth={true}>
                    {this.data.map(item => (
                        <MenuItem value={item.name} key={item.id}>{item.name}</MenuItem>
                    ))}
                </Select>
            </Fragment>
        );
    }
}

export default Search;
