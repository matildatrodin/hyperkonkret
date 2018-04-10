import React from 'react';
import Sidebar from 'react-sidebar';
import profile from './profile.png'
import './side.css';
import {Content} from './content.js';
import {Knapplogin} from './knapplogin.js';
import {Knapp} from './knapp.js';

const mql = window.matchMedia(`(min-width: 800px)`);

class SideLogin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mql: mql,
            docked: props.docked,
            open: props.open,
            display: 1
        }

        // display: 1= standard content, 2 = "om oss", 3 = "kontakta oss"

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
        this.setState({mql: mql, sidebarDocked: mql.matches});
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    mediaQueryChanged() {
        this.setState({sidebarDocked: this.state.mql.matches});
    }

    changeState(pressedButton){
        if (pressedButton >= 2 || pressedButton <=5) {
            this.setState({
                display: pressedButton
            })

        }
        else {
            console.log("sideBar.changeState is in an else statement....");

        }
    }

    render() {
        var sidebarContent =
            <b>
                <div id={"sideMenuLogin"} className="Side">
                    <img src={profile} className="Side-logo" alt="profile"/>
                    <br/>
                    <Knapp name="Om oss" className="Side-button" onClick={this.changeState} alternative={2} />
                    <Knapp name="Kontakt" className="Side-button" onClick={this.changeState} alternative={3} />
                    <Knapp name="Progress" className="Side-button" onClick={this.changeState} alternative={4} />
                    <Knapp name="Kurser" className="Side-button" onClick={this.changeState} alternative={5} />
                </div>
            </b>;
        var sidebarProps = {
            sidebar: this.state.sidebarOpen,
            docked: this.state.sidebarDocked,
            onSetOpen: this.onSetSidebarOpen
        };

        return (
            <div>
                <Sidebar sidebar={sidebarContent}
                         open={this.state.sidebarOpen}
                         docked={this.state.sidebarDocked}
                         onSetOpen={this.onSetSidebarOpen}>
                </Sidebar>
                <Content displayAlt={this.state.display} />
            </div>
        );
    }
};

export default SideLogin;