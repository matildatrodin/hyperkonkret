import React from 'react';
import '../../styles/profile.css';
import Heck from '../../images/heck.png';
import { Line, Circle } from 'rc-progress';

/* Vi kommer här behöva implementera props, så att vi varje gång vi öppnar profilen
skickar med id för kurs och quiz och får ut data på hur långt
eleven kommit.

Vi kommer också behöva göra en funktion som visar så många kurser just den studenten
är registrerad på, nu är det hårdkodat precis 3 stycken.

Det kan vi inte riktigt göra förrän vi har back-end*/

const user = {
    name: 'Matilda',
    image: require('../../images/heck.png')
};

const quiz = {
    id: 'Väsande'
};

const course = {
    name: 'Ormlivet',
    creator: 'Maggan',
    quizName: quiz.id
};


export default class Profile extends React.Component {

    constructor(props) {
        super(props);
    };


    render() {

        return(
            <div className='Profile'>
                <img src={user.image} className='Profile-img'/>
                <p className='Profile-name'>{user.name}</p>
                <div>
                    <h2 className='Progress-title'>Framsteg</h2>
                </div>
                <div className='Profile-progress-body'>
                    <div className='Profile-progress-box'>
                        <h3>{course.name}</h3>
                        <h6>Skapad av {course.creator}</h6>
                        <br/>
                        <Line className='Profile-progress-bar' percent="30" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">{course.quizName}</p>
                        <Line className='Profile-progress-bar' percent="60" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Coolhet</p>
                        <Line className='Profile-progress-bar' percent="100" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Ålande</p>
                    </div>
                    <div className='Profile-progress-box'>
                        <h3>Slytherinlära</h3>
                        <h6>Skapad av Kjelle</h6>
                        <br/>
                        <Line className='Profile-progress-bar' percent="10" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Slipsknut</p>
                        <Line className='Profile-progress-bar' percent="80" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Pappa betalar</p>
                        <Line className='Profile-progress-bar' percent="40" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Muggel-hat</p>
                        <Line className='Profile-progress-bar' percent="50" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Swag</p>
                    </div>
                    <div className='Profile-progress-box'>
                        <h3>Taco-fredag</h3>
                        <h6>Skapad av Sussie</h6>
                        <br/>
                        <Line className='Profile-progress-bar' percent="40" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Perfekt guacca</p>
                        <Line className='Profile-progress-bar' percent="60" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Skära tomat med slö kniv</p>
                        <Line className='Profile-progress-bar' percent="10" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Gräddfil eller kräm fräsch?</p>
                        <Line className='Profile-progress-bar' percent="80" strokeWidth="2" trailWidth="2" strokeColor="#99ff99"/>
                        <p align="left">Mediumsås</p>
                    </div>
                </div>
            </div>
        )
    }
}