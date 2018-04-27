import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import TeacherPage from '../pages/teacherPage';
import { Header } from '../modules/header';
import Profile from '../pages/profile';
import { Course } from '../pages/course';
import CreateQuiz from "../pages/createQuiz";



export default class Routes extends React.Component {

    render () {
        return (
            <div>
                <Route path="/" component={Header}/>
                <Switch>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/teacher" component={TeacherPage}/>
                    <Route path="/course" component={Course}/>
                    <Route path="/createquiz" component={CreateQuiz}/>
                </Switch>
            </div>
        )
    }
}