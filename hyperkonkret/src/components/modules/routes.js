import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import TeacherPage from '../pages/teacherPage';
import FirstPage from '../pages/firstPage';
import Profile from '../pages/profile';
import { Course } from '../pages/course';
import CreateQuiz from "../pages/createQuiz";



export default class Routes extends React.Component {

    constructor(props) {
        super(props);
        this.changeState = this.changeState.bind(this);
    }

    changeState(student, teacher){
      if (student){
        this.props.changeContent("student");
      }
      if (teacher){
        this.props.changeContent("teacher");
    }
  }

    render () {
        return (
            <div>
                <Route exact path="/" render={()=><FirstPage changeState={this.changeState}/>}/>
                <Switch>
                    <Route path="/student" component={Profile}/>
                    <Route path="/teacher" component={TeacherPage}/>
                    <Route path="/course" component={Course}/>
                    <Route path="/createquiz" component={CreateQuiz}/>
                </Switch>
            </div>
        )
    }
}
