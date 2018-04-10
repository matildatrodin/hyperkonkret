import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Content from './content.js';

export class OmOss extends React.Component{
    constructor(props){
        super(props);
        this.state = { text: "Här ska det stå om hyperkonkret...." }
    }


    render(){
        return(
            <div>
                <h1> {this.state.text} </h1>
            </div>
        );
    }

};

