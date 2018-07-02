import React, { Component } from 'react';
import './App.css';
import Navbar from "./Header/Navbar/Navbar";
import Form from "./component/Section/Form";
import FormTry from "./component/Section/FormTry";
import DisplayProject from "./component/Section/DisplayProject";
import Layout from "./component/Layout/Layout";

class App extends Component {
  render() {
      return (
          <div>
              <Layout/>
          </div>
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
