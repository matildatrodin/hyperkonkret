import React from 'react';
import '../../styles/about.css';
import Routes from '../modules/routes';
import { Link, Redirect } from 'react-router-dom';
import {logo} from '../../images/logo shadow/hyperkonkret-black.png';
import {Jessica} from '../../images/jessica.png';
import {Calle} from '../../images/Calle.jpg';
import {Footer} from '../modules/footer';



const text1 = "...är grundare av MrsHyper.se, författare, föreläsare och ArtDirector med expertkunskaper inom ADHD och Asperger. Jessica har skrivit och illustrerat ett flertal böcker om NPF och en bok om Psoriasisartrit. Hennes driv och engagemang för barn med liknande problematik bottnar i hennes egen familj.";

const text2 ="...är grundare av glosboken.se som är ett av Sveriges mest använda språkverktyg. Systemarkitekt, civilingenjör och innovatör inom edutech med spetskompetens inom dyslexi. Carl-Martins driv startade när han skulle lära sig över 200 glosor i veckan på universitetet och behövde ett verktyg som underlättade och gjorde det roligare.";




const images = {
    image: require('../../images/logo shadow/hyperkonkret-black.png'),
    student: require('../../images/icons/elever.png'),
    teacher: require('../../images/icons/larare.png'),
    jessica: require('../../images/jessica.png'),
    calle: require('../../images/Calle.jpg')
};

export default class About extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <img src={images.image} className="Header-img"/>

                <div className="text-container">
                    <div className="headline-container">
                        <h2>Om oss</h2>
                    </div>
                    <div className="text-box1">
                        <div className="info-logo-text">Jessica Stigsdotter Axberg</div>
                        <img src={images.jessica} className="about-pic"/>
                        <div className="info-text"> {text1}</div>
                    </div>

                    <div className="text-box2">
                        <div className="info-logo-text">Carl-Martin Hellberg</div>
                        <img src={images.calle} className="about-pic"/>

                        <div className="info-text"> {text2 }</div>
                    </div>
                </div>
                <Footer/>

            </div>
        )
    }

};
