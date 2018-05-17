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
    }

    logout(){
      // Lägg till funktionalitet för att logga ut (alt återvända till hemskärmen)
    }

    render(){

        return(
            <header className="App-header">
                <Link to="/"><img src={images.image} className="App-header-logo"/></Link>
                <button className="Button-log-out" onClick={this.logout}>Logga ut</button>
            </header>
        );
    }

}
