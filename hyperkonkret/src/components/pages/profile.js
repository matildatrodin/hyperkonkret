import React from 'react';
import '../../styles/profile.css';
import Student from '../../images/student.jpg';
import { Line } from 'rc-progress';
import { user } from '../data/user-data';
import { course } from '../data/course-data';
import { Header } from '../modules/header';
import {Footer} from '../modules/footer';


/* Vi kommer här behöva implementera props, så att vi varje gång vi öppnar profilen
skickar med id för kurs och quiz och får ut data på hur långt
eleven kommit.

Vi kommer också behöva göra en funktion som visar så många kurser just den studenten
är registrerad på, nu är det hårdkodat precis 3 stycken.

Det kan vi inte riktigt göra förrän vi har back-end*/

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
                <div className="Profile-header">
                    <h2>Profil</h2>
                </div>
                    <div className="Profile-top-content">
                        <div style={{backgroundImage: "url(" +  Student  + ")"}} className="Profile-img"/>
                        <h2 className='Profile-name'>{user.username}</h2>
                        <h3 className='Profile-properties'>{user.usertype}</h3>
                        <h3 className='Profile-properties' style={{fontWeight: 'bold'}}>{user.firstname} {user.lastname}</h3>
                        <h3 className='Profile-properties'>{user.email}</h3>
                        <h3 className='Profile-properties'>Senast inloggad: {user.last_login}</h3>
                    </div>
                    <div className="Profile-top-right-content">
                        <h2 className='Profile-name-right'>Sammanfattning</h2>
                        <h3 className='Profile-properties-right'>2 avklarade ämnen</h3>
                        <h3 className='Profile-properties-right'>23 avklarade uppgifter</h3>
                        <h3 className='Profile-properties-right'>10 pågående uppgifter</h3>
                        <h3 className='Profile-properties-right' style={{fontWeight: 'bold'}}>Senast avklarad uppgift: Substantiv</h3>
                    </div>
                <div className="Profile-bottom-content">
                <div>
                    <h2 className='Progress-title'>Framsteg</h2>
                </div>
                <div className='Profile-progress-body'>
                    {/*{this.state.users.map(user => */ } {/* detta ska med när vi har API*/}
                    <div className='Profile-progress-box'>
                        <h3>Sverige</h3>
                        <h6>Skapad av {course.created_by}</h6>
                        <br/>
                        <Line className='Profile-progress-bar' percent="30" strokeWidth="2" trailWidth="2" strokeColor="#008B8B"/>
                        <p align="left">Landskap</p>
                        <Line className='Profile-progress-bar' percent="60" strokeWidth="2" trailWidth="2" strokeColor="#008B8B"/>
                        <p align="left">Städer</p>
                    </div>
                    { /* )} */} {/* detta ska med när vi har API*/}

                    <div className='Profile-progress-box'>
                        <h3>Ekonomi</h3>
                        <h6>Skapad av Robert</h6>
                        <br/>
                        <Line className='Profile-progress-bar' percent="90" strokeWidth="2" trailWidth="2" strokeColor="#008B8B"/>
                        <p align="left">Ekonomiska termer</p>
                        <Line className='Profile-progress-bar' percent="100" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Vad gör en bank</p>
                    </div>

                    <div className='Profile-progress-box'>
                        <h3>Medeltiden</h3>
                        <h6>Skapad av Jan</h6>
                        <br/>
                        <Line className='Profile-progress-bar' percent="100" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Att leva på medeltiden</p>
                        <Line className='Profile-progress-bar' percent="100" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Kalmarunionen</p>
                        <Line className='Profile-progress-bar' percent="20" strokeWidth="2" trailWidth="2" strokeColor="#008B8B"/>
                        <p align="left">Från asatro till kristendom</p>
                    </div>
                </div>

                </div>
                <Footer/>
            </div>
        )
    }
}
