import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, Hello World #6! edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    Test 20180701
                </p>
                <GetGreeting/>
            </div>);
    }
}

class GetGreeting extends React.Component {
    buttonName = "Get Greeting REST call: ";

    constructor() {
        super();
        this.state = {
            buttonString: this.buttonName,
            response: 'None'
        }
    }

    // This syntax ensures 'this' is bound within handleClick via self.
    // NOTE: this is *experimental* syntax.
    handleClick = () => {
        const self = this;
        axios.get('http://localhost:8080/greeting')
            .then(function (response) {
                self.setState({response: " " +
                       JSON.stringify(response.data.id) + ": " +
                       JSON.stringify(response.data.content)});
            })
            .catch(function (error) {
                alert('Greeting call error= ' + error.toString());
            });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.buttonString}
                </button>
                <p/>
                    GetGreeting Response:
                <br/>
                <label>
                    {this.state.response}
                </label>
            </div>
        );
    }
}

export default App;
