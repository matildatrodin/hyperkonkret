import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Knapp }from './knapplogin.js';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {  alt: 1 };
        this.changeState = this.changeState.bind(this);
    }

    changeState(oldState){
        if(oldState == 1){
            this.setState({
                alt: 2
            })

        }
        else {
            this.setState({
                alt: 1
            })

        }

    }


  render(){
      if (this.state.alt == 1) {
          return (
              <div className="App">
                  <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo"/>
                      <h1 className="App-title">Welcome to React everyone</h1>
                  </header>
                  <div id={"menu"}>
                      <button>Om oss</button>
                      <button>Kontakt</button>
                  </div>


                  <p className="App-intro">
                      Click to sign in!
                  </p>

              <Knapp name={"Login"} alternative={this.state.alt} onClick={this.changeState} />
              </div>
          );
      }
      if (this.state.alt == 2) {
            return (
              <div className="App">
                  <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo"/>
                      <h1 className="App-title">Welcome to React everyone</h1>
                  </header>

                  <p className="App-intro">
                      Click to sign out!
                  </p>

                  <Knapp name={"Logout"} alternative ={this.state.alt} onClick={this.changeState} />
              </div>
      );
  }
  }
}

export default App;

