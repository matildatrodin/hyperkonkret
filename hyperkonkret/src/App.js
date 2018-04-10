import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
/*import SideBar from "./sidebarTest";*/
import SideBar from "./sidebar";

class App extends React.Component {
    constructor(props) {
        super(props);

       /* this.state =  1;
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

    /*render(){
        const{ main, nav } = this.props;
        return (
            <div className="App-body">
                <SideBar>
                <div>
                    {nav}
                </div>
                <div>
                    {main}
                </div>
                </SideBar>
            </div>
        )
    }*/
    render(){
        return (
            <div className ="App-body">
                <SideBar/>
                <header className = "App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Hyperkonkret!</h1>
                </header>
                <Login/>
                <br/>
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

