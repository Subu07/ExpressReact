import React, { Component } from 'react';
import './App.css';
import Navbar from "./Header/Navbar/Navbar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
          //  this.fetchData();
    }
    sendData = (data) => {
        fetch("/send",{
            body: JSON.stringify(data),
            headers: {'content-type' : 'application/json',},
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => console.log(data));
    };

    handleChange = (event) => {
        this.setState({
            formData: event.target.value
        });
        event.preventDefault();
    };
    handleSubmit = (event) => {
        console.log(this.state.formData);
        this.sendData(this.state.formData);
        this.setState({
            formData: []
        });
        event.preventDefault();
    };
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

  render() {
    return (
      <div className="App">
        <Navbar/>
          <form onSubmit={this.handleSubmit}>
              <input type={"text"} onChange={this.handleChange}/>
              <button type={"submit"}>Submit</button>
          </form>
      </div>
    );
  }
}

export default App;
