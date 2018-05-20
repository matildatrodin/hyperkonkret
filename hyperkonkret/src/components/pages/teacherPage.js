import React from 'react';
import { ListGroupItem, Collapse, UncontrolledDropdown, UncontrolledCollapse } from 'reactstrap';
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
import {Footer} from '../modules/footer';



const course = {
    id: 1,
    name: 'Ormlivet',
    creator: 'Maggan',
    quizName: 'Väsande'
};


const teacher = {
    username: 'Natalie85',
    image: require('../../images/teacher.jpg'),
    usertype: 'Lärare',
    firstname: 'Natalie',
    lastname: 'Oskarsson',
    email: 'natalie.oskarsson@gmail.com',
    last_login: '4 timmar'
}



export default class TeacherPage extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleFirst = this.toggleFirst.bind(this);
        this.toggleSecond = this.toggleSecond.bind(this);
        this.toggleThird = this.toggleThird.bind(this);
        this.toggleFourth = this.toggleFourth.bind(this);
        this.toggleFifth = this.toggleFifth.bind(this);
        this.toggleSixed = this.toggleSixed.bind(this);
        this.state = {
            collapseFirst: false,
            collapseSecond: false,
            collapsedThird: false,
            collapsedFourth: false,
            collapsedFifth: false,
            collapsedSixed: false
        };
    }

    toggleFirst() {
        this.setState({ collapseFirst: !this.state.collapseFirst });
    }
    toggleSecond() {
        this.setState({ collapseSecond: !this.state.collapseSecond });
    }
    toggleThird() {
        this.setState({ collapseThird: !this.state.collapseThird });
    }
    toggleFourth() {
        this.setState({ collapseFourth: !this.state.collapseFourth });
    }
    toggleFifth() {
        this.setState({ collapseFifth: !this.state.collapseFifth });
    }
    toggleSixed() {
        this.setState({ collapseSixed: !this.state.collapseSixed });
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {

        return (
                <div className="Teacher">
                    <Header/>
                    <div className="Teacher-header">
                        <h2>Profil</h2>
                    </div>
                    <div className="Teacher-body">
                    <div className="Teacher-card">
                        <div style={{backgroundImage: "url(" +  Teacher  + ")"}} className="Teacher-img"/>
                        <h2 className="Teacher-name">{teacher.username}</h2>
                            <h3 className='Teacher-properties'>{teacher.usertype}</h3>
                            <h3 className='Teacher-properties' style={{fontWeight: 'bold'}}>{teacher.firstname} {teacher.lastname}</h3>
                            <h3 className='Teacher-properties'>{teacher.email}</h3>
                            <h3 className='Teacher-properties'>Senast inloggad: {teacher.last_login}</h3>
                        </div>
                        <div className="Teacher-card-right">
                            <h2 className="Teacher-name-right">Översikt</h2>
                            <h3 className='Teacher-properties-right'>15 anslutna elever</h3>
                            <h3 className='Teacher-properties-right'>4 aktuella kurser</h3>
                            <h3 className='Teacher-properties-right' style={{fontWeight: 'bold'}}>6 uppgifter klara för rättning</h3>
                            <Button className='Correct-button'>Gå till rättning</Button>
                        </div>
                        <br/>
                    <div className="Course-list">
                        <div className="Course-body">
                                <div className="Course-title" onClick={this.toggleFirst}>
                                    <h3>Svenska ordklasser<FaAngleUp className={this.state.collapseFirst ? "Arrow-down" : "Arrow-up"}/></h3>
                                </div>
                                <Collapse isOpen={this.state.collapseFirst} style={{maxWidth: '300px'}}>
                                        <div className="Course-box">
                                            <b>Adjektiv</b>
                                            <Line className='Profile-progress-bar' percent="33" strokeWidth="2" trailWidth="2" strokeColor="#008B8B"/>
                                            <p align="right"> 3/9 elever klara</p>

                                            <b>Verb</b>
                                            <Line className='Profile-progress-bar' percent="55" strokeWidth="2" trailWidth="2" strokeColor="#008B8B"/>
                                            <p align="right"> 5/9 elever klara</p>

                                            <b>Substantiv</b>
                                            <Line className='Profile-progress-bar' percent="100" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                                            <p align="right"> 9/9 elever klara</p>
                                            <div align="center">
                                                <Button className="Course-edit-button">Redigera</Button>
                                            </div>
                                        </div>
                                </Collapse>
                        </div>

                        <div className="Course-body">
                            <div className="Course-title" onClick={this.toggleSecond}>
                                <h3 align="left">Sveriges geografi<FaAngleUp className={this.state.collapseSecond ? "Arrow-down" : "Arrow-up"}/></h3>
                            </div>
                            <Collapse isOpen={this.state.collapseSecond} style={{maxWidth: '300px'}}>
                                <div className="Course-box">
                                    <b>Landskap</b>
                                    <Line className='Profile-progress-bar' percent="50" strokeWidth="2" trailWidth="2" strokeColor="#008B8B"/>
                                    <p align="right"> 6/12 elever klara</p>

                                    <b>Största städer</b>
                                    <Line className='Profile-progress-bar' percent="100" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                                    <p align="right"> 12/12 elever klara</p>

                                    <b>Öar</b>
                                    <Line className='Profile-progress-bar' percent="25" strokeWidth="2" trailWidth="2" strokeColor="#008B8B"/>
                                    <p align="right"> 3/12 elever klara</p>

                                    <b>Sjöar</b>
                                    <Line className='Profile-progress-bar' percent="100" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                                    <p align="right"> 12/12 elever klara</p>
                                    <div align="center">
                                        <Button className="Course-edit-button">Redigera</Button>
                                    </div>
                                </div>
                            </Collapse>
                            </div>

                        <div className="Course-body">
                            <div className="Course-title" onClick={this.toggleThird}>
                                <h3 align="left">Andra världskriget<FaAngleUp className={this.state.collapseThird ? "Arrow-down" : "Arrow-up"}/></h3>
                            </div>
                            <Collapse isOpen={this.state.collapseThird} style={{maxWidth: '300px'}}>
                                <div className="Course-box">
                                    <b>Krigets orsaker</b>
                                    <Line className='Profile-progress-bar' percent="100" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                                    <p align="right"> 8/8 elever klara</p>

                                    <b>Västfront vs. östfront</b>
                                    <Line className='Profile-progress-bar' percent="88" strokeWidth="2" trailWidth="2" strokeColor="#008B8B"/>
                                    <p align="right"> 7/8 elever klara</p>

                                    <b>Allianser</b>
                                    <Line className='Profile-progress-bar' percent="50" strokeWidth="2" trailWidth="2" strokeColor="#008B8B"/>
                                    <p align="right"> 4/8 elever klara</p>
                                    <div align="center">
                                        <Button className="Course-edit-button">Redigera</Button>
                                    </div>
                                </div>
                            </Collapse>
                        </div>

                        <div className="Course-body">
                            <div className="Course-title" onClick={this.toggleFourth}>
                                <h3 align="left">Samhällskunskap<FaAngleUp className={this.state.collapseFourth ? "Arrow-down" : "Arrow-up"}/></h3>
                            </div>
                            <Collapse isOpen={this.state.collapseFourth} style={{maxWidth: '300px'}}>
                                <div className="Course-box">
                                    <b>Demokratin i världen</b>
                                    <Line className='Profile-progress-bar' percent="20" strokeWidth="2" trailWidth="2" strokeColor="#008B8B"/>
                                    <p align="right"> 1/5 elever klara</p>

                                    <b>Grundlagar</b>
                                    <Line className='Profile-progress-bar' percent="60" strokeWidth="2" trailWidth="2" strokeColor="#008B8B"/>
                                    <p align="right"> 3/5 elever klara</p>

                                    <b>Politiska partier</b>
                                    <Line className='Profile-progress-bar' percent="40" strokeWidth="2" trailWidth="2" strokeColor="#008B8B"/>
                                    <p align="right"> 2/5 elever klara</p>
                                    <div align="center">
                                        <Button className="Course-edit-button">Redigera</Button>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                        </div>
                    </div>
                    <Footer/>
                    </div>
        )
    }
};

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
