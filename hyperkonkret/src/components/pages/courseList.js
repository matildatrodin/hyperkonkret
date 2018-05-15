import React from 'react';
import Course from './course';
import {Header} from '../modules/header';
import {course} from '../data/course-data';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, CardColumns, Row, Container, CardDeck, CardLink } from 'reactstrap';
import '../../styles/myCourses.css';

const img = {
    landskap: require('../../images/icons/tummeupp.png'),
};

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
                    <div className="title-subjects">
                        <h2>Dina ämnen</h2>
                    </div>
                    <div className="subjects">
                        <CardDeck>
                            <Card className="card-box">
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '6%', width: '50%'}} src={img.landskap}/>
                                <CardBody>
                                    <CardTitle>{course[0].title}</CardTitle>
                                    <CardText>
                                        {course[0].description}
                                    </CardText>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} onClick={(id) => this.handleClick(1)}>Gör en övning</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardImg/>
                                <CardBody>
                                    <CardTitle>{course[1].title}</CardTitle>
                                    <CardText>
                                        {course[1].description}
                                    </CardText>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} onClick={(id) => this.handleClick(2)}>Gör en övning</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardImg/>
                                <CardBody>
                                    <CardTitle>{course[2].title}</CardTitle>
                                    <CardText>
                                        {course[2].description}
                                    </CardText>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} onClick={(id) => this.handleClick(3)}>Gör en övning</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                        </CardDeck>
                    </div>
                </div>

            )

        }
        else {
            return(<Course id={id} title={course[id-1].title} goBackToCourseList={this.handleClick}/>);

        }
    }
}
