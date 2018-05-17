import React, { PropTypes } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';
import { Knapp } from './components/modules/knapp';
import { Login } from './components/modules/Login';
import SideBar from './components/modules/sidebar';
import {Header} from "./components/modules/header";
import {Footer} from "./components/modules/footer";
import { BrowserRouter as Router } from 'react-router-dom';
import {user} from "./components/data/user-data";
/*import SideBarLogin from './sidebarLogin';*/

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    componentWillMount(){
        this.getInitialStudent();
        this.getInitialTeacher()

    }


    getInitialStudent () {
        localStorage.getItem('currentStudent');
        this.setState({isStudent: 'currentStudent'});
    }

    getInitialTeacher () {
        localStorage.getItem('isTeacher');
        this.setState({isTeacher: 'currentTeacher'});
    }


    saveStudent() {
        localStorage.setItem('currentStudent', JSON.parse(true));
        localStorage.setItem('currentTeacher', JSON.parse(false));
        this.setState({isStudent: true, isTeacher: false});
        console.log(localStorage);
        console.log(this.state);
    }

    saveTeacher() {
        localStorage.setItem('currentTeacher', JSON.parse(true));
        localStorage.setItem('currentStudent', JSON.parse(false));
        this.setState({isStudent: false, isTeacher: true});
        console.log(localStorage);
        console.log(this.state);
    }

    changeSidebarContent(user) {
      console.log("Går in i App:s changeContent");
      if (user == "student"){
          this.saveStudent();
      }
      else if (user == "teacher"){
          this.saveTeacher()
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
          <div>
            <Router>
                <div className="App-body">
                    <SideBar changeContent={this.changeSidebarContent} loginState={this.state.currentState} student={this.state.isStudent} teacher={this.state.isTeacher}/>
                    <br/>
                </div>
            </Router>
          </div>
        )
    }
}


 /*
 render() {

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
