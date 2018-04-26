import React from 'react';
import '../../styles/App.css';
import '../../styles/teacherPage.css';
import logo from '../../images/logo.svg';
import { Footer } from './footer';
import { Header } from './header';
import { FirstPage} from "../pages/firstPage";
import { Course } from "../pages/course";
import TeacherPage from "../pages/teacherPage";
import CreateQuiz from '../pages/createQuiz';

export class Content extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        if (this.props.displayAlt == 1) {
            return (
                <div>
                    <FirstPage/>
                </div>
            );
        }
        if (this.props.displayAlt== 2) {
            return (
                <div>
                    <CreateQuiz/>
                </div>
            );
        }
        if (this.props.displayAlt== 3) {
            return (
                <div>
                </div>
            );
        }
        if (this.props.displayAlt == 4) {
            return (
                <div>
                    <Header/>
                    <TeacherPage className="TeacherPage-Body"/>
                    <Footer/>
                </div>
            );
        }
        if (this.props.displayAlt == 5) {
            return (<Course />);
        }
        else{
            return(
                <h1>det blev else...</h1>

            );
        }
    }
}