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

    getInitialState () {

    }


    render() {
      if (this.props.student){
        SidebarContent = StudentSidebarContent;
      }
      else if (this.props.teacher){
        SidebarContent = TeacherSidebarContent;
      }
      else {
        SidebarContent = LoggedOutSidebarContent;
      }

        return (
            <div>
                <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                    {SidebarContent}
                </Menu>
                <Header/>
                <Routes changeContent={this.props.changeContent}/>

            </div>

        );
    }
}

export default SideBar;
