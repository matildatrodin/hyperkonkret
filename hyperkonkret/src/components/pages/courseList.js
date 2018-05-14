import React from 'react';
import { Button } from 'reactstrap';
import Course from './course';
import {Header} from '../modules/header';
import {course} from '../data/course-data';


export default class CourseList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            show: 0,
            name: ""
        }
        this.handleClick = this.handleClick.bind(this);


    }

    handleClick(id){
    this.setState({show: id});
    }


    render(){
      let id = this.state.show;

        if (this.state.show==0){
            return (
                <div>
                    <Header/>
                    <h2>Dina registrerade kurser:</h2>
                    <br></br>
                    <Button style={{marginBottom: '2%'}} onClick={(id) => this.handleClick(1)}>{course[0].title}</Button>
                    <br/>
                    <Button style={{marginBottom: '2%'}} onClick={(id) => this.handleClick(2)}>{course[1].title}</Button>
                    <br/>
                    <Button style={{marginBottom: '2%'}} onClick={(id) => this.handleClick(3)}>{course[2].title}</Button>
                </div>

            )

        }
        else {
            return(<Course id={id} title={course[id-1].title} goBackToCourseList={this.handleClick}/>);

        }
    }
}
