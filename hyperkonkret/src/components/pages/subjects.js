import React from 'react';
import Course from './course';
import {Header} from '../modules/header';
import {course} from '../data/course-data';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, CardColumns, Row, Container, CardDeck, CardLink } from 'reactstrap';
import '../../styles/subjects.css';


const img = {
    svenska: require('../../images/icons/samhalle.png'),
    geografi: require('../../images/icons/geografi-green.png'),
    historia: require('../../images/icons/historia-brun.png'),
    religion: require('../../images/icons/religion-orange.png'),
    samhalle: require('../../images/icons/so_lila.png'),
    plus: require('../../images/icons/plus.png')

};

export default class Subjects extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            show: 0,
            name: ""
        }
        this.handleClick = this.handleClick.bind(this);


    }

    handleClick(id){
        if(id == null) {
            this.props.history.push("/create-subject")

        }else{
            this.props.history.push("/exercises");
        }
    }


    render(){
        let id = this.state.show;

        if (this.state.show==0) {
            return (
                <div>
                    <Header/>
                    <div className="title-box">
                        <h2>Dina övningar</h2>
                    </div>
                    <div className="subjects">
                        <CardDeck>
                            <Card style={{minWidth: '300px', maxWidth: '300px', marginBottom: '2%', boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'}}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '6%', width: '50%'}}
                                         src={img.svenska}/>
                                <CardBody>
                                    <CardTitle>{course[4-1].title}</CardTitle>
                                    <CardLink>
                                        <Button style={{marginBottom: '2%'}}
                                                onClick={(id) => this.handleClick(4)}>Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card style={{minWidth: '300px', maxWidth: '300px', marginBottom: '2%', boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'}}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '6%', width: '50%'}}
                                              src={img.geografi}/>
                                <CardBody>
                                    <CardTitle>{course[5-1].title}</CardTitle>
                                    <CardLink>
                                        <Button style={{marginBottom: '2%'}}
                                                onClick={(id) => this.handleClick(5)}>Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card style={{minWidth: '300px', maxWidth: '300px', marginBottom: '2%', boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'}}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '6%', width: '50%'}}
                                         src={img.historia}/>
                                <CardBody>
                                    <CardTitle>{course[6-1].title}</CardTitle>
                                    <CardLink>
                                        <Button style={{marginBottom: '2%'}}
                                                onClick={(id) => this.handleClick(6)}>Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card >
                            <Card style={{minWidth: '300px', maxWidth: '300px', marginBottom: '2%', boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'}}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '6%', width: '50%'}}
                                         src={img.samhalle}/>
                                <CardBody>
                                    <CardTitle>{course[7-1].title}</CardTitle>
                                    <CardLink>
                                        <Button style={{marginBottom: '2%'}}
                                                onClick={(id) => this.handleClick(7)}>Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card style={{minWidth: '300px', maxWidth: '300px', marginBottom: '2%', boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'}}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '6%', width: '50%'}}
                                         src={img.plus}/>
                                <CardBody>
                                    <CardLink>
                                        <Button style={{marginBottom: '2%'}} onClick={(id) => this.handleClick(null)}>Skapa
                                            nytt ämne</Button>
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
