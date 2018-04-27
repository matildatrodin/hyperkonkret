import React from 'react';
import Sidebar from 'react-sidebar';
import '../../styles/side.css';
import '../../styles/App.css';
import {slide as Menu} from 'react-burger-menu';
import {Header} from "./header";
import { Link } from 'react-router-dom';
import Routes from './routes';

class SideBar extends React.Component {

    isMenuOpen(state) {
        return state.isOpen;
    };

    constructor(props) {
        super(props);
    }

    render() {

     /*   if (this.props.loginState){
            var addLoginButton = <Login name={"Logga ut"} onClick={this.logOut}/>;
        }*/

        var sidebarContent =

          <div id={"Sidebar"} className="Side">
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/about">Om oss</Link>
                  </li>
                  <li>
                      <Link to="/contact">Kontakta oss</Link>
                  </li>
                  <li>
                      <Link to="/profile">Profil</Link>
                  </li>
                  <li>
                      <Link to="/teacher">Lärare</Link>
                  </li>
                  <li>
                      <Link to="/course">Kurs</Link>
                  </li>
                  <li>
                      <Link to="/createquiz">Skapa quiz</Link>
                  </li>

          </div>;

        return (
            <div>
                <Menu onStateChange={this.isMenuOpen}>
                    { sidebarContent }
                </Menu>
                <Routes/>
                <Header/>
            </div>

        );
    }
}

export default SideBar;




