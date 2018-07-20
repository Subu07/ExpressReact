import React, { Component } from "react";
import "./App.css";
import Layout from "./component/Layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Project from "./Header/Navbar/Project";
import Supervisor from "./Header/Navbar/Supervisor";
import Student from "./Header/Navbar/Student";

class App extends Component {
  render() {
    let heading = ["Batch", "Name", "Roll No", "Action"];
    return (
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact={true} render={() => <Layout />} />
          <Route path={"/project"} exact={true} render={() => <Project />} />
          <Route
            path={"/supervisor"}
            exact={true}
            render={() => <Supervisor />}
          />
          <Route
            path={"/student"}
            exact={true}
            render={() => <Student title={heading} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }

  /* fetchData = () => {
        fetch("/check")
            .then(response => response.json())
            .then(response => response.map(data => ({
                name: data.name,
                id: data.idInstructor,
            })))
            .then(data => this.setState({

                info: data
            }))
            .catch(error => console.log(error))

    };
    */
  /*
          {console.log(this.state.info)}
        <p>
            <h1>This is the React World</h1>
        </p>
              {this.state.info.map(info =>(
                  <ul key={info.id}>
                    {info.name}
                  </ul>
              ))}
         */
}

export default App;
