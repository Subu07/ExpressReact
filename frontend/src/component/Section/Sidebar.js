import React, {Component, Fragment} from 'react';
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import List from "@material-ui/core/es/List/List";
import Divider from "@material-ui/core/es/Divider/Divider";

class Sidebar extends Component {

    render() {
        return (
            <Fragment>
                <span style={{marginTop : 50}}>
                    <Drawer variant={"permanent"}>
                        <List>Department</List>
                        <Divider/>
                        <List>Year</List>
                        <Divider/>
                        <List>Category</List>
                        <Divider/>
                        <List>Supervisor</List>
                        <Divider/>
                        <List>Department</List>

                    </Drawer>
                </span>
            </Fragment>
        );
    }
}

export default Sidebar;
