import React from 'react';
import { Button } from 'reactstrap';
import Course from './course';
import {Header} from '../modules/header';


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
            this.setState({
                show: 1,
                name: "Kurs 1"
            });
        }
        else if(id==2){
            this.setState({
                show: 2,
                name: "Kurs 2"
            });
        }
    }


    render(){
        if(this.state.show==1){
            return(<Course name={this.state.name}/>);

        }
        else if(this.state.show==2){
            return(<Course name={this.state.name}/>);

        }
        else {
            return (
                <div>
                    <Header/>
                    <h2>Kurser</h2>
                    <br></br>
                    <Button onClick={(e, id) => this.handleClick(e, 1)}> Kurs 1</Button>
                    <Button onClick={(e, id) => this.handleClick(e, 2)}> Kurs 2</Button>
                </div>

            )

        }
    }
}