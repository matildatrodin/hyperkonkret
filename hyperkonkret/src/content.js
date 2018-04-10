import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './Login.js';
import { Side } from './sidebar.js';
import SideLogin from './sidebarLogin';
import { Knapp }from './knapplogin.js';
import { OmOss } from './omoss.js';



export class Content extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        if (this.props.displayAlt == 1) {
            return (
                <div>
                    <h1>Hej här är standard-content</h1>
                </div>
            );
        }
        if (this.props.displayAlt== 2) {
            return (
                <div>
                    <OmOss />
                </div>
            );
        }
        if (this.props.displayAlt== 3) {
            return (
                <div>
                    <h1>Kontakta oss på ..... </h1>
                </div>
            );
        }
        if (this.props.displayAlt == 4) {
            return (
                <div>
                    <h1>Hej här är din progress</h1>
                </div>
            );
        }
        if (this.props.displayAlt == 5) {
            return (
                <div>
                    <h1>Hej här är dina kurser</h1>
                </div>
            );
        }
        else{
                return(
                  <h1>det blev else...</h1>

                );
        }
    }
}




