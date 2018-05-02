import React from 'react';
import Sidebar from 'react-sidebar';
import '../../styles/side.css';
import '../../styles/App.css';
import {slide as Menu} from 'react-burger-menu';
import { Header } from "./header";
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

          <div id={"Sidebar"}>
                  <li className="bm-item-list">
                      <Link to="/" className="Link" style={{textDecoration: 'none'}}>Home</Link>
                      <br/>
                      <Link to="/about" className="Link" style={{textDecoration: 'none'}}>Om oss</Link>
                      <br/>
                      <Link to="/contact" className="Link" style={{textDecoration: 'none'}}>Kontakta oss</Link>
                      <br/>
                      <Link to="/profile" className="Link" style={{textDecoration: 'none'}}>Profil</Link>
                      <br/>
                      <Link to="/teacher" className="Link" style={{textDecoration: 'none'}}>Lärare</Link>
                      <br/>
                      <Link to="/course" className="Link" style={{textDecoration: 'none'}}>Kurs</Link>
                      <br/>
                      <Link to="/createquiz" className="Link" style={{textDecoration: 'none'}}>Skapa quiz</Link>
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




