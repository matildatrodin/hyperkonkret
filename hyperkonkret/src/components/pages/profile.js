import React from 'react';
import '../../styles/profile.css';
import Heck from '../../images/heck.png';
import { Line } from 'rc-progress';
import { user } from '../user-data';
import { course } from '../course-data';

/* Vi kommer här behöva implementera props, så att vi varje gång vi öppnar profilen
skickar med id för kurs och quiz och får ut data på hur långt
eleven kommit.

Vi kommer också behöva göra en funktion som visar så många kurser just den studenten
är registrerad på, nu är det hårdkodat precis 3 stycken.

Det kan vi inte riktigt göra förrän vi har back-end*/

const users = {
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
            self.setState({users: data});
        }).catch(err => {
            console.log('caught it!', err);
        })
    }


    render() {

        return(
            <div className='Profile'>
                <img src={users.image} className='Profile-img'/>
                <p className='Profile-name'>{user.username}</p>
                <div>
                    <h2 className='Progress-title'>Framsteg</h2>
                </div>
                <div className='Profile-progress-body'>
                    {/*{this.state.users.map(user => */ } {/* detta ska med när vi har API*/}
                    <div className='Profile-progress-box'>
                        <h3>{course.title}</h3>
                        <h6>Skapad av {course.created_by}</h6>
                        <br/>
                        <Line className='Profile-progress-bar' percent="30" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Väsande</p>
                        <Line className='Profile-progress-bar' percent="60" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Coolhet</p>
                        <Line className='Profile-progress-bar' percent="100" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Ålande</p>
                    </div>
                    { /* )} */} {/* detta ska med när vi har API*/}
                </div>
            </div>
        )
    }
}