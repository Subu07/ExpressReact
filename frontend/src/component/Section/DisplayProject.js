import React, {Component, Fragment} from 'react';
import "./../../index.css";
import DataTable from "./DataTable";
import sortBy from 'lodash/sortBy';
import {observer} from 'mobx-react';

class DisplayProject extends Component {
    state = {
        data: []
    };
    componentDidMount(){
        fetch("/reqData",)
            .then(res => res.json())
            .then(json => sortBy(json,'projectName'))
            .then(json => this.setState({
                data: json
            }))
            .catch(err=>console.log(err))
    }
   render() {
        console.log(this.state.data);
       let heading = ['Year','Project Title','Category','Student Name','Roll','SuperVisor','Action'];
        return (
            <Fragment>
                <DataTable heading={heading} data={this.state.data}/>
            </Fragment>
        );
    }
}

export default observer(DisplayProject);