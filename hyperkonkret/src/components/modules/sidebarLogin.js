import React from 'react';
import Sidebar from 'react-sidebar';
import '../../styles/side.css';
import Login from "./Login"
import PropTypes from 'prop-types';
import {slide as Menu} from 'react-burger-menu';

class SideBarLogin extends React.Component {
    showSettings(event) {
        event.preventDefault();

    }

    isMenuOpen(state) {
        return state.isOpen;
    };

    render() {
        return (
            <Menu onStateChange={this.isMenuOpen}>
                <a id="home" className="menu-intem" href="/">Home</a>
                <a id="test" className="menu-item" href="/test">Test</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}

export default SideBarLogin;




