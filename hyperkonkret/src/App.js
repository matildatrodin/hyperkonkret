import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Knapp }from './knapplogin.js';
import Side from './sidebar';
import SideLogin from './sidebarLogin';

class App extends Component {
    constructor(props) {
        super(props);

        /*this.state =  1;
        this.changeState = this.changeState.bind(this);
    }

    changeState(oldState) {
        if (oldState == 1) {
            this.setState({
                alt: 2
            })

        }
        else {
            this.setState({
                alt: 1
            })

        }*/

    }
    render(){
        return (
            <div className ="App-body">
                <Side/>
                <header className = "App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Hyperkonkret!</h1>
                </header>
                <br/>
                <Login className="App-button-login"/>
                <button className="App-button-register">Registrera</button>
                <footer className="App-footer">Hej jag är en footer tjoho</footer>
            </div>
        )
    }


   /* render() {

        if (this.state.alt == 1) {
            return (
                <div className="App-body">
                    <button onClick={this.showSideBar}>Show sidebar!</button>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Hyperkonkret!</h1>
                    </header>
                    <Knapp name={"Logga in med google"} alternative={this.state.alt} onClick={this.changeState}/>
                    <br/>
                    <button className="App-button-register">Registrera</button>
                    <footer className="App-footer">Hej jag är en footer tjoho</footer>
                </div>
            );
        }
        if (this.state.alt == 2) {
            return (
                <div className="App-body">
                    <SideLogin/>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Välkommen!</h1>
                    </header>
                    <Knapp name={"Logga ut"} alternative={this.state.alt} onClick={this.changeState}/>
                    <footer className="App-footer">Hej jag är en footer tjoho</footer>
                </div>
            );
        }
    }*/
}

export default App;

