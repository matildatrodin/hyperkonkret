import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/index.css';
import App from '../../App';
import Login from './Login.js';



export class Knapp extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleCLick.bind(this);
    }


    handleCLick(){
        const newState = this.props.alternative;
        this.props.onClick(newState);

    }


    render(){
        return(
            <button className="App-button-login" onClick={this.handleClick}>
                {this.props.name}
            </button>

        );
    }

};


