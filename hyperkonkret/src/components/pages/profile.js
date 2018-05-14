import React from 'react';
import '../../styles/profile.css';
import Student from '../../images/heck.png';
import { Line } from 'rc-progress';
import { user } from '../data/user-data';
import { course } from '../data/course-data';
import { Header } from '../modules/header';

/* Vi kommer här behöva implementera props, så att vi varje gång vi öppnar profilen
skickar med id för kurs och quiz och får ut data på hur långt
eleven kommit.

Vi kommer också behöva göra en funktion som visar så många kurser just den studenten
är registrerad på, nu är det hårdkodat precis 3 stycken.

Det kan vi inte riktigt göra förrän vi har back-end*/

const items = {
    image: require('../../images/heck.png')
};

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }


    /* denna funktion kommer användas sen när vi fått ett API */
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
    }


    render() {

        return(
            <div className='Profile'>
                <Header/>
                <h2 className="Profile-header">Min sida</h2>
                    <div className="Profile-top-content-box">
                        <div style={{backgroundImage: "url(" +  Student  + ")"}} className="Profile-img"/>
                        <p className='Profile-name'>{user.username}</p>
                    </div>
                    <div className="Profile-top-content-box">
                        <p className='Profile-properties'>{user.usertype}</p>
                        <p className='Profile-properties' style={{fontWeight: 'bold'}}>{user.firstname} {user.lastname}</p>
                        <p className='Profile-properties'>{user.email}</p>
                        <p className='Profile-properties'>Senast inloggad: {user.last_login}</p>
                    </div>
                <br/>
                <div>
                    <h2 className='Progress-title'>Framsteg</h2>
                </div>
                <div className='Profile-progress-body'>
                    {/*{this.state.users.map(user => */ } {/* detta ska med när vi har API*/}
                    <div className='Profile-progress-box'>
                        <h3>Svenska ordklasser</h3>
                        <h6>Skapad av {course.created_by}</h6>
                        <br/>
                        <Line className='Profile-progress-bar' percent="30" strokeWidth="2" trailWidth="2" strokeColor="#92dbe8"/>
                        <p align="left">Adjektiv</p>
                        <Line className='Profile-progress-bar' percent="60" strokeWidth="2" trailWidth="2" strokeColor="#92dbe8"/>
                        <p align="left">Verb</p>
                        <Line className='Profile-progress-bar' percent="100" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Substantiv</p>
                    </div>
                    { /* )} */} {/* detta ska med när vi har API*/}

                    <div className='Profile-progress-box'>
                        <h3>Matematik</h3>
                        <h6>Skapad av Robert</h6>
                        <br/>
                        <Line className='Profile-progress-bar' percent="90" strokeWidth="2" trailWidth="2" strokeColor="#92dbe8"/>
                        <p align="left">Multiplikation</p>
                        <Line className='Profile-progress-bar' percent="100" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Division</p>
                        <Line className='Profile-progress-bar' percent="60" strokeWidth="2" trailWidth="2" strokeColor="#92dbe8"/>
                        <p align="left">Bråktal</p>
                        <Line className='Profile-progress-bar' percent="20" strokeWidth="2" trailWidth="2" strokeColor="#92dbe8"/>
                        <p align="left">Procenträkning</p>
                    </div>

                    <div className='Profile-progress-box'>
                        <h3>Religion</h3>
                        <h6>Skapad av Jan</h6>
                        <br/>
                        <Line className='Profile-progress-bar' percent="100" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Symboler</p>
                        <Line className='Profile-progress-bar' percent="100" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Gudar</p>
                        <Line className='Profile-progress-bar' percent="20" strokeWidth="2" trailWidth="2" strokeColor="#92dbe8"/>
                        <p align="left">Religiösa byggnader</p>
                    </div>

                </div>
            </div>
        )
    }
}