import React from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';
import '../../images/bild2.jpg';
import '../../styles/teacherPage.css';
import CoursePage from './coursePage';
import { Line } from 'rc-progress';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleUp from 'react-icons/lib/fa/angle-up';

const items = [
    {
        image: require('../../images/bild2.jpg')
    }
];

const course = {
    id: 1,
    name: 'Ormlivet',
    creator: 'Maggan',
    quizName: 'Väsande'
};

const teacher = {
    name: 'Maggan',
    image: require('../../images/teacher.jpg')
}



export default class TeacherPage extends React.Component {

  /*  componentDidMount() {
        let self = this;
        fetch('/course', {method: 'GET'}).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server")
            }
            return response.json();
        }).then(function(data) {
            self.setState({course: data});
        }).catch(err => {
            console.log('caught it!', err);
        })
    }

      componentDidMount() {
        let self = this;
        fetch('/user', {method: 'GET'}).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server")
            }
            return response.json();
        }).then(function(data) {
            self.setState({user: data});
        }).catch(err => {
            console.log('caught it!', err);
        })
    }*/


    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {

        return (
                <div className="Teacher">
                    <img src={teacher.image} className="Teacher-img"/>
                    <h2 className="Teacher-name">{teacher.name}</h2>
                    <div className="Course-title" onClick={this.toggle}>
                        <h3 align="left">{course.name}<FaAngleUp className={this.state.collapse ? "Arrow-down" : "Arrow-up"}/></h3>
                    </div>
                        <Collapse isOpen={this.state.collapse}>
                            <div className="Course-body">
                                <div className="Course-box">
                                    <h6>{course.quizName}</h6>
                                    <Line className='Profile-progress-bar' percent="30" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                                    <p align="left">{course.quizName}</p>
                                </div>
                            </div>
                        </Collapse>
                </div>
        )
    }
};