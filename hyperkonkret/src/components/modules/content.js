import React from 'react';
import '../../styles/App.css';
import logo from '../../images/logo.svg';
import { Footer } from './footer';
import { Header } from './header';
import { FirstPage} from "../pages/firstPage";


export class Content extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        if (this.props.displayAlt == 1) {
            return (
                <div>
                    <Header/>
                    <FirstPage/>
                    <Footer/>
                </div>
            );
        }
        if (this.props.displayAlt== 2) {
            return (
                <div>
                    <Header/>
                    <Footer/>
                </div>
            );
        }
        if (this.props.displayAlt== 3) {
            return (
                <div>
                    <Header/>
                    <Footer/>
                </div>
            );
        }
        if (this.props.displayAlt == 4) {
            return (
                <div>
                    <Header/>
                    <Footer/>
                </div>
            );
        }
        if (this.props.displayAlt == 5) {
            return (
                <div>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Kurser</h1>
                    </header>
                    <Footer/>
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