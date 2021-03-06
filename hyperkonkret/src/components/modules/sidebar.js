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
        this.state = {menuOpen: false};
        this.logout = this.logout.bind(this);
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

    logout = () => {
        this.props.resetState();
        this.closeMenu();
    }

    render() {
        let LogoutButton = <Link to="/" className="Button-logout" onClick={() => this.logout()}>Logga ut</Link>
        const isTeacher = this.props.teacher;
        const isStudent = this.props.student;

        if (isTeacher == 1){
            SidebarContent = TeacherSidebarContent;
        }
        else if (isStudent == 1){
            SidebarContent = StudentSidebarContent;
        }
        else {
            SidebarContent = LoggedOutSidebarContent;
            LogoutButton = <div></div>
        }


        return (
            <div>
                <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                    {SidebarContent}
                    {LogoutButton}
                </Menu>
                <Routes changeContent={this.props.changeContent}/>
            </div>

        );
    }
}

export default SideBar;
