import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import TeacherPage from '../pages/teacherPage';
import FirstPage from '../pages/firstPage';
import Profile from '../pages/profile';
import { Course } from '../pages/course';
import CreateQuiz from "../pages/createQuiz";
import CourseList from '../pages/courseList';
import Exercises from '../pages/exercises';
import Subjects from '../pages/subjects';
import CreateSubject from '../pages/createSubject';
import About from '../pages/About';


class Routes extends React.Component {

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
                <Route exact path="/" render={() => <FirstPage changeState={this.changeState}/>}/>
                <Switch>
                    <Route path="/student" component={Profile}/>
                    <Route path="/teacher" component={TeacherPage}/>
                    <Route path="/course" component={CourseList}/>
                    <Route path="/exercises" component={Exercises}/>
                    <Route path="/quiz" component={CreateQuiz}/>
                    <Route path="/subjects" component={Subjects}/>
                    <Route path="/create-subject" component={CreateSubject}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(Routes);
