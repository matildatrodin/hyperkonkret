import React, { PropTypes } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';
import { Knapp } from './components/modules/knapp';
import { Login } from './components/modules/Login';
import SideBar from './components/modules/sidebar';
import {Header} from "./components/modules/header";
import {Footer} from "./components/modules/footer";
import { BrowserRouter as Router } from 'react-router-dom';
/*import SideBarLogin from './sidebarLogin';*/

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
              currentState: false,
              isStudent: false,
              isTeacher: false
          };
        this.loginState = this.loginState.bind(this);
        this.changeSidebarContent=this.changeSidebarContent.bind(this);
        /*  this.state =  {alt: 1};
          this.changeState = this.changeState.bind(this);*/
    }

    loginState(newState){
        this.setState({currentState: newState});
    }

    changeSidebarContent(user) {
      console.log("Går in i App:s changeContent");
      if (user == "student"){
        this.setState({isStudent: true, isTeacher: false});
      }
      else if (user == "teacher"){
        this.setState({isStudent: false, isTeacher: true});
      }
      else {
        this.setState({isStudent: false, isTeacher: false});
      }
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
            <Router>
                <div className="App-body">
                    <SideBar changeContent={this.changeSidebarContent} loginState={this.state.currentState} student={this.state.isStudent} teacher={this.state.isTeacher}/>
                    <br/>
                </div>
            </Router>
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
