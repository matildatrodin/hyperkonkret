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

    handleClick(e, id){
        if(id==1){
            this.setState({show: 1});
        }
        else if(id==2){
            this.setState({show: 2});
        }
    }


    render(){
      let id = this.state.show;

        if (this.state.show==0){
            return (
                <div>
                    <Header/>
                    <h2>Kurser</h2>
                    <br></br>
                    <Button onClick={(e, id) => this.handleClick(e, 1)}>{course[0].title}</Button>
                    <Button onClick={(e, id) => this.handleClick(e, 2)}>{course[1].title}</Button>
                    <Button onClick={(e, id) => this.handleClick(e, 3)}>{course[2].title}</Button>
                </div>

            )

        }
        else {
            return(<Course id={id} title={course[id-1].title}/>);

        }
    }
}
