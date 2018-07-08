import React, {Component, Fragment} from 'react';
import "./../../index.css";
import DataTable from "./DataTable";
import sortBy from 'lodash/sortBy';
import {observer} from 'mobx-react';

class DisplayProject extends Component {
    state = {
        data: []
    };
    componentDidUpdate(prevProps, _,__){
        /*if (prevProps.searchField !== this.props.searchField) {
            fetch("/reqData", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    category: this.props.searchField[0],
                    supervisor: this.props.searchField[1],
                    batch: this.props.searchField[2],})
            }).then(res => res.json())
                .then(json => sortBy(json,'projectName'))
                .then(json => this.setState({
                    data: json
                }))
                .catch(err=>console.log(err))
        }*/
    }
    componentDidMount(){
        fetch("/reqData",).
        then(res => res.json())
            .then(json => sortBy(json,'projectName'))
            .then(json => this.setState({
                data: json
            }))
            .catch(err=>console.log(err))
    }
   render() {
        console.log(this.state.data);
       let heading = ['Year','Project Title','Category','Name','Roll','SuperVisor','Action'];
        return (
            <Fragment>
                <DataTable heading={heading} data={this.state.data}/>
            </Fragment>
        );
    }
}

export default observer(DisplayProject);