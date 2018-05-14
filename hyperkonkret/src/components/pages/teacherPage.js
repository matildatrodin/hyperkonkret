import React from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';
import '../../images/bild2.jpg';
import Teacher from '../../images/teacher.jpg'
import '../../styles/teacherPage.css';
import CoursePage from './coursePage';
import { Line } from 'rc-progress';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import { Button } from 'react-bootstrap';
import {user} from "../data/user-data";
import { Header } from '../modules/header';

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
    username: 'Maggan',
    image: require('../../images/teacher.jpg'),
    usertype: 'Lärare',
    firstname: 'Margareta',
    lastname: 'Jansson',
    email: 'maggan77@gmail.com',
    last_login: '4 timmar'
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
        this.toggleFirst = this.toggleFirst.bind(this);
        this.toggleSecond = this.toggleFirst.bind(this);
        this.state = { collapse: false };
    }

    toggleFirst() {
        this.setState({ collapse: !this.state.collapse });
    }
    toggleSecond() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {

        return (
                <div className="Teacher">
                    <Header/>
                    <div className="Teacher-body">
                    <div style={{backgroundImage: "url(" +  Teacher  + ")"}} className="Teacher-img"/>
                        <br/>
                    <h2 className="Teacher-name">{teacher.username}</h2>
                    <br/>
                        <p className='Teacher-properties'>{teacher.usertype}</p>
                        <p className='Teacher-properties' style={{fontWeight: 'bold'}}>{teacher.firstname} {teacher.lastname}</p>
                        <p className='Teacher-properties'>{teacher.email}</p>
                        <p className='Teacher-properties'>Senast inloggad: {teacher.last_login}</p>
                        <br/>
                    <div className="Course-title" onClick={this.toggleFirst}>
                        <h3 align="left">Svenska ordklasser<FaAngleUp className={this.state.collapse ? "Arrow-down" : "Arrow-up"}/></h3>
                    </div>
                        <Collapse isOpen={this.state.collapse}>
                            <div className="Course-body">
                                <div className="Course-box">
                                    <Line className='Profile-progress-bar' percent="30" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                                    <p align="left">Adjektiv</p>
                                    <div align="right">
                                        <Button className="Course-edit-button">Redigera</Button>
                                    </div>
                                    <Line className='Profile-progress-bar' percent="30" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                                    <p align="left">Verb</p>
                                    <div align="right">
                                        <Button className="Course-edit-button">Redigera</Button>
                                    </div>
                                    <Line className='Profile-progress-bar' percent="30" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                                    <p align="left">Substantiv</p>
                                    <div align="right">
                                        <Button className="Course-edit-button">Redigera</Button>
                                    </div>
                                </div>
                            </div>
                        </Collapse>

                    <div className="Course-title" onClick={this.toggleSecond}>
                        <h3 align="left">Svenska ordklasser<FaAngleUp className={this.state.collapse ? "Arrow-down" : "Arrow-up"}/></h3>
                    </div>
                    <Collapse isOpen={this.state.collapse}>
                        <div className="Course-body">
                            <div className="Course-box">
                                <Line className='Profile-progress-bar' percent="30" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                                <p align="left">Adjektiv</p>
                                <div align="right">
                                    <Button className="Course-edit-button">Redigera</Button>
                                </div>
                                <Line className='Profile-progress-bar' percent="30" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                                <p align="left">Verb</p>
                                <div align="right">
                                    <Button className="Course-edit-button">Redigera</Button>
                                </div>
                                <Line className='Profile-progress-bar' percent="30" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                                <p align="left">Substantiv</p>
                                <div align="right">
                                    <Button className="Course-edit-button">Redigera</Button>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
                </div>
        )
    }
};