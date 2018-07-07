import React, {Component, Fragment} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import red from "@material-ui/core/es/colors/red";
import Dividers from "@material-ui/core/"
import RButton from "../../Header/Navbar/RButton";
import Divider from '@material-ui/core/Divider';
import getData from "./Store";
import AddProject from "./AddProject";
import green from "@material-ui/core/es/colors/green";

import Clear from "@material-ui/icons/Clear";
import Eye from "@material-ui/icons/Visibility";


class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            supervisor: "",
            category: "",
            year: "",
            supervisorData: [],
            categoryData: [],
            batchData: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        });
    };
    componentDidUpdate(prevProps, prevState, prevContext) {
        if (prevState !== this.state) {
            this.props.getData(this.state.category, this.state.supervisor, this.state.year);
        }
    }

    componentDidMount(){
        getData()
            .then(data => this.setState({
                supervisorData: data[0],
                categoryData: data[1],
                batchData: data[2]
            }))
    }

    handleClearClick = () => {
        this.setState({
            supervisor: "",
            category: "",
            year: "",
        })
    };

    render() {
        return (
            <div style={{marginLeft:10}}>
                <InputLabel>Category:</InputLabel>
                <br/>
                <Select value={this.state.category} name={"category"} onChange={this.handleChange} fullWidth={true}>
                    {this.state.categoryData.map(item => (
                        <MenuItem value={item.name} key={item.name}>{item.name}</MenuItem>
                    ))}
                </Select>
                <Divider/>
                <br/>
                <br/>
                <InputLabel>Supervisors:</InputLabel>
                <br/>
                <br/>
                <Select value={this.state.supervisor} name={"supervisor"} onChange={this.handleChange} fullWidth={true}>
                    {this.state.supervisorData.map(item => (
                        <MenuItem value={item.name} key={item.idInstructor}>{item.name}</MenuItem>
                    ))}
                </Select>
                 <Divider/>
                <br />
                <br/>
                <InputLabel>Year:</InputLabel>
                <br/>
                <br/>
                <Select value={this.state.year} name={"year"} onChange={this.handleChange} fullWidth={true}>
                    {this.state.batchData.map(item => (
                        <MenuItem value={item.year} key={item.year}>{item.year}</MenuItem>
                    ))}
                </Select>
                 <Divider/>
                <br/>
                <RButton color={green} buttonText={"View"} style = {{marginTop: 20, marginLeft: 10}}><Eye/></RButton>
                <br/>
                <RButton color={red} buttonText={"Clear"} style={{marginTop: 20, marginLeft: 10}}
                         onClick={this.handleClearClick}><Clear/></RButton>
                <AddProject/>
            </div>
        );
    }
}

export default Search;
