import React from 'react';
import Routes from '../modules/routes';
import { Link, Redirect, withRouter } from 'react-router-dom';


const images = {
    image: require('../../images/logo shadow/hyperkonkret-black.png')
};

export class Header extends React.Component{

    constructor(props) {
        super(props);
    }

  /*  returnHome(props) {
        this.props.history.push('/');
    }*/

    render(){

        return(
          <header className="App-header">
                <img src={images.image} className="App-header-logo"/>
            </header>
        );
    }

}
