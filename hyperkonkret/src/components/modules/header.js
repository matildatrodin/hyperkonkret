import React from 'react';
import Routes from '../modules/routes';
import { Link, Redirect, withRouter } from 'react-router-dom';
//import Heck from '../../images/logo shadow/hyperkonkret-black.png';


const images = {
    image: require('../../images/logo shadow/hyperkonkret-black.png')
};

export class Header extends React.Component{

    constructor(props) {
        super(props);
        this.returnHome = this.returnHome.bind(this);
    }

    returnHome(props) {
        this.props.history.push('/');
    }

    logout(){
      // Lägg till funktionalitet för att logga ut (alt återvända till hemskärmen)
    }

    render(){

        return(
            <header className="App-header">
                <img src={images.image} className="App-header-logo" onClick={this.returnHome}/>
                <button className="Button-log-out" onClick={this.logout}>Logga ut</button>
            </header>
        );
    }

}
