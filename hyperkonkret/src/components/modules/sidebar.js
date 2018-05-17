import React from 'react';
import Sidebar from 'react-sidebar';
import '../../styles/side.css';
import '../../styles/App.css';
import {slide as Menu} from 'react-burger-menu';
import { Header } from "./header";
import { Link } from 'react-router-dom';
import Routes from './routes';
import FirstPage from '../pages/firstPage';
import {LoggedOutSidebarContent, TeacherSidebarContent, StudentSidebarContent} from '../data/sidebarContent';

let SidebarContent;

class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {menuOpen: false}
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

    logout() {
      this.closeMenu;
      this.props.changeSidebarContent; ;
    }



    render() {

        const isTeacher = this.props.teacher;
        console.log(isTeacher);

        const isStudent = this.props.student;
        console.log(isStudent);


        if (isTeacher == 1){
            SidebarContent = TeacherSidebarContent;
            console.log("valde lärare")
        }

        else if (isStudent == 1){
            SidebarContent = StudentSidebarContent;
            console.log("valde elev")
        }
        else {
            SidebarContent = LoggedOutSidebarContent;
            console.log("valde ingen")
        }


        return (
            <div>
                <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                    {SidebarContent}
                    <Link to="/" className="Button-log-out" onClick={this.logout}>Logga ut</Link>
                </Menu>
                <Routes changeContent={this.props.changeContent}/>
            </div>

        );
    }
}

export default SideBar;
