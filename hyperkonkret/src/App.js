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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
              isStudent: 0,
              isTeacher: 0
          };

        this.loginState = this.loginState.bind(this);
        this.changeSidebarContent=this.changeSidebarContent.bind(this);
        this.setDefaultState = this.setDefaultState.bind(this);
        /*  this.state =  {alt: 1};
          this.changeState = this.changeState.bind(this);*/
    }

    loginState(newState){
        this.setState({currentState: newState});
    }

    componentWillMount(){
        this.getInitialStudent();
        this.getInitialTeacher();

    }
    setDefaultState () {
        this.setState({isStudent: 0, isTeacher: 0});
        localStorage.setItem('currentStudent', 0);
        localStorage.setItem('currentTeacher', 0);
    }


    getInitialStudent () {
        this.setState({isStudent: localStorage.getItem('currentStudent')});
    }

    getInitialTeacher () {
        this.setState({isTeacher: localStorage.getItem('currentTeacher')});
    }


    saveStudent() {
        localStorage.setItem('currentStudent', 1);
        localStorage.setItem('currentTeacher', 0);
        this.setState({isStudent: 1, isTeacher: 0});
        console.log(localStorage);
        console.log(this.state);
    }

    saveTeacher() {
        localStorage.setItem('currentStudent', 0);
        localStorage.setItem('currentTeacher', 1);
        this.setState({isStudent: 0, isTeacher: 1});
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
        this.setState({isStudent: 0, isTeacher: 0});
      }
    }


    render() {
        return (
            <div>
              <div className="App">
                  <Router>
                      <div className="App-body">
                          <SideBar changeContent={this.changeSidebarContent} student={this.state.isStudent} teacher={this.state.isTeacher} resetState={this.setDefaultState}/>
                          <br/>
                      </div>
                  </Router>
              </div>
            </div>
        )
    }
}

export default App;
