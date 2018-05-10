import React from 'react';
import Sidebar from 'react-sidebar';
import '../../styles/side.css';
import '../../styles/App.css';
import {slide as Menu} from 'react-burger-menu';
import { Header } from "./header";
import { Link } from 'react-router-dom';
import Routes from './routes';
import '../../images/profil.png';
import FirstPage from '../pages/firstPage';


const user = {
    image: require('../../images/profil.png')
};

class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    };

    closeMenu () {
        this.setState({menuOpen: false})
    }

    toggleMenu () {
        this.setState({menuOpen: !this.state.menuOpen})
    }

    getInitialState () {

    }


    render() {

        var TeacherSidebarContent =

          <div id={"Sidebar"}>
              <img src={user.image} className="Profile-img-side"/>
                  <li className="bm-item-list">
                      <Link to="/" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Home</Link>
                      <br/>
                      <Link to="/teacher" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Lärare</Link>
                      <br/>
                      <Link to="/course" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Kurs</Link>
                      <br/>
                      <Link to="/createquiz" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Skapa quiz</Link>
                      <br/>
                      <Link to="/about" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Om oss</Link>
                      <br/>
                      <Link to="/contact" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Kontakta oss</Link>
                  </li>

          </div>;

        var StudentSidebarContent =

            <div id={"Sidebar"}>
                <img src={user.image} className="Profile-img-side"/>
                <li className="bm-item-list">
                    <Link to="/" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Home</Link>
                    <br/>
                    <Link to="/student" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Elev</Link>
                    <br/>
                    <Link to="/course" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Kurs</Link>
                    <br/>
                    <Link to="/about" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Om oss</Link>
                    <br/>
                    <Link to="/contact" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Kontakta oss</Link>
                </li>

            </div>;

        return (
            <div>
                <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                    { TeacherSidebarContent }
                </Menu>
                <Routes/>
                <Header/>
            </div>

        );
    }
}

export default SideBar;




