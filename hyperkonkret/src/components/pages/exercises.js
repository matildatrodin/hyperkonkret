import React from 'react';
import Course from './course';
import {Header} from '../modules/header';
import {course} from '../data/course-data';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, CardColumns, Row, Container, CardDeck, CardLink } from 'reactstrap';
import '../../styles/exercises.css';


const img = {
    svenska: require('../../images/icons/samhalle.png'),
    geografi: require('../../images/icons/geografi-green.png'),
    historia: require('../../images/icons/historia-brun.png'),
    religion: require('../../images/icons/religion-orange.png'),
    samhalle: require('../../images/icons/so_lila.png'),
    plus: require('../../images/icons/plus.png')

};

export default class Exercises extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            show: 0,
            name: ""
        }
        this.handleClick = this.handleClick.bind(this);


    }

    handleClick(){
        this.props.history.push("/quiz");
    }


    render(){
        let id = this.state.show;

        if (this.state.show==0){
            return (
                <div>
                    <Header/>
                    <div className="title-subjects">
                        <h2>Dina övningar</h2>
                    </div>
                    <div className="subjects">
                        <CardDeck>
                            <Card className="card-box">
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '6%', width: '50%'}} src={img.geografi}/>
                                <CardBody>
                                    <CardTitle>{course[0].title}</CardTitle>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}}>Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '6%', width: '50%'}} src={img.samhalle}/>
                                <CardBody>
                                    <CardTitle>{course[1].title}</CardTitle>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} >Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '6%', width: '50%'}} src={img.historia}/>
                                <CardBody>
                                    <CardTitle>{course[2].title}</CardTitle>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} >Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '6%', width: '50%'}} src={img.plus}/>
                                <CardBody>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} onClick={this.handleClick}>Skapa ny övning</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                        </CardDeck>
                    </div>
                </div>

            )

        }else if(this.state.show==3){

        }
        else {
            return(<Course id={id} title={course[id-1].title} goBackToCourseList={this.handleClick}/>);

        }
    }
}
