import React, { PropTypes } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';
import { Knapp } from './components/modules/knapp';
import { Login } from './components/modules/Login';
import SideBar from './components/modules/sidebar';
/*import SideBarLogin from './sidebarLogin';*/

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentState: false};
        this.loginState = this.loginState.bind(this);

        /*  this.state =  {alt: 1};
          this.changeState = this.changeState.bind(this);*/
    }

    loginState(newState){
        this.setState({currentState: newState});
    }

    /*  changeState(oldState) {
          if (oldState == 1) {
              this.setState({
                  alt: 2
              })

          }
          else {
              this.setState({
                  alt: 1
              })

          }

      }*/


    render() {

        return (
            <div className="App-body">
                <SideBar loginState={this.state.currentState}/>
                <br/>
                <Login name={"Logga in"} onClick={this.loginState}/>
            </div>
        )
    }
}


 /*   render() {

        if (this.state.alt == 1) {
            return (
                <div className="App-body">
                    <SideBar/>
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
                    <SideBarLogin/>
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

export default App;

