import React from 'react';
import '../../images/img2.jpg';
import '../../images/img2.jpg';
import '../../styles/firstPage.css';
import Routes from '../modules/routes';
import { Link, Redirect, browserHistory } from 'react-router-dom';
import {logo} from '../../images/logo shadow/hyperkonkret-black.png';
import { Footer } from '../modules/footer';


const images = {
    image: require('../../images/logo shadow/hyperkonkret-black.png'),
    student: require('../../images/icons/elever.png'),
    teacher: require('../../images/icons/larare.png')

};

export default class FirstPage extends React.Component {

    constructor(props) {
        super(props);
        this.openTeacher = this.openTeacher.bind(this);
        this.openStudent = this.openStudent.bind(this);
    }

    openTeacher() {
        this.props.changeState(false, true);
    }

    openStudent() {
        this.props.changeState(true, false);
    }

    render() {

        return(
            <div>
                <img src={images.image} className="Header-img"/>
                <div className="text-box">
                    <div className="info-text"> Det är en självklarhet att alla ska kunna lära sig det man vill. Hyperkonkret är en lärandemiljö som hjälper både lärare och föräldrar hur man ska stötta elever. Inspiration, motivation och studieteknik i ett paket.</div>
                    <div className="info-logo-text">Hyperkonkret, helt enkelt!</div>
                </div>
                <div>
                    <img className="pic" src={images.student} />
                    <img className="pic" src={images.teacher} />
                </div>
                <button onClick={this.openStudent}>Elever börjar här</button>
                <button onClick={this.openTeacher}>Lärare börjar här</button>
                <div className="FirstPage-catch">
                    - Inkludering får aldrig bli exkludering -
                </div>
                <Footer/>
            </div>
        )
    }

};
