import React from 'react';
import '../../images/img2.jpg';
import '../../images/img2.jpg';
import '../../styles/firstPage.css';
import Routes from '../modules/routes';
import { Link, Redirect } from 'react-router-dom';

export default class FirstPage extends React.Component {

    constructor(props) {
        super(props);
        this.openTeacher = this.openTeacher.bind(this);
        this.openStudent = this.openStudent.bind(this);
    }

    openTeacher() {
        //this.props.history.push("/teacher");
        //this.setState({isTeacher: true});
        this.props.changeState(false, true);
    }

    openStudent() {
        //this.props.history.push("/student");
        //this.setState({isStudent: true});
        this.props.changeState(true, false);
    }

    render() {
        return(
            <div>
                <div className="FirstPage-content">
                    <button className="Button-student" onClick={this.openStudent}>Elev</button>
                </div>
                <div className="FirstPage-content">
                    <button className="Button-teacher" onClick={this.openTeacher}>Lärare</button>
                </div>
            </div>
        )
    }
};
