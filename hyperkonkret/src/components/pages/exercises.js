import React from 'react';
import Course from './course';
import {Header} from '../modules/header';
import {course} from '../data/course-data';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, CardColumns, Row, Container, CardDeck, CardLink } from 'reactstrap';
import '../../styles/exercises.css';
import CreateQuiz from '../pages/createQuiz';
import {Footer} from '../modules/footer';



const img = {
    svenska: require('../../images/icons/samhalle.png'),
    geografi: require('../../images/icons/geografi-green.png'),
    historia: require('../../images/icons/historia-brun.png'),
    religion: require('../../images/icons/religion-orange.png'),
    samhalle: require('../../images/icons/so_lila.png'),
    plus: require('../../images/icons/plus.png'),
    geografi2: require('../../images/icons/geografi.png'),
    historia2: require('../../images/icons/history.png')

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
        this.setState({show: 1});
    }


    render(){
        let id = this.state.show;

        if (this.props.id==1 && this.state.show==0){
            return (
                <div>
                    <Header/>
                    <div className="title-subjects">
                        <h2>Dina övningar
                            <Button id="go-back" onClick={() => this.props.goBackToSubjects(0)}>Gå tillbaka till ämnen</Button>
                        </h2>
                    </div>
                    <div className="subjects">
                        <CardDeck>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '2%', width: '50%'}} src={img.samhalle}/>
                                <CardBody>
                                    <CardTitle>Verb</CardTitle>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}}>Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '2%', width: '50%'}} src={img.svenska}/>
                                <CardBody>
                                    <CardTitle>Substantiv</CardTitle>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} >Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '2%', width: '50%'}} src={img.samhalle}/>
                                <CardBody>
                                    <CardTitle>Adjektiv</CardTitle>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} >Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '2%', width: '50%'}} src={img.plus}/>
                                <CardBody>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} onClick={this.handleClick}>Skapa ny övning</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                        </CardDeck>
                    </div>
                    <Footer />
                </div>

            )
        }else if(this.props.id == 2 && this.state.show==0){
            return (
                <div>
                    <Header/>
                    <div className="title-subjects">
                        <h2>Dina övningar
                            <Button id="go-back" onClick={() => this.props.goBackToSubjects(0)}>Gå tillbaka till ämnen</Button>
                        </h2>
                    </div>
                    <div className="subjects">
                        <CardDeck>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '2%', width: '50%'}} src={img.geografi}/>
                                <CardBody>
                                    <CardTitle>Största städer</CardTitle>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}}>Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '2%', width: '50%'}} src={img.geografi2}/>
                                <CardBody>
                                    <CardTitle>Sjöar</CardTitle>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} >Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '2%', width: '50%'}} src={img.geografi}/>
                                <CardBody>
                                    <CardTitle>Öar</CardTitle>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} >Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '2%', width: '50%'}} src={img.geografi2}/>
                                <CardBody>
                                    <CardTitle>Landskap</CardTitle>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} >Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '2%', width: '50%'}} src={img.plus}/>
                                <CardBody>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} onClick={this.handleClick}>Skapa ny övning</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                        </CardDeck>
                    </div>
                    <Footer/>
                </div>

            )
        }else if(this.props.id == 3 && this.state.show==0){
            return (
                <div>
                    <Header/>
                    <div className="title-subjects">
                        <h2>Dina övningar
                            <Button id="go-back" onClick={() => this.props.goBackToSubjects(0)}>Gå tillbaka till ämnen</Button>
                        </h2>
                    </div>
                    <div className="subjects">
                        <CardDeck>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '2%', width: '50%'}} src={img.historia}/>
                                <CardBody>
                                    <CardTitle>Krigets orsaker</CardTitle>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}}>Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '2%', width: '50%'}} src={img.historia2}/>
                                <CardBody>
                                    <CardTitle>Västfront vs. östfront</CardTitle>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} >Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '2%', width: '50%'}} src={img.historia}/>
                                <CardBody>
                                    <CardTitle>Allianser</CardTitle>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} >Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '2%', width: '50%'}} src={img.plus}/>
                                <CardBody>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} onClick={this.handleClick}>Skapa ny övning</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                        </CardDeck>
                    </div>
                    <Footer/>
                </div>
            )
        }else if(this.props.id == 4 && this.state.show==0){
            return (
                <div>
                    <Header/>
                    <div className="title-subjects">
                        <h2>Dina övningar
                            <Button id="go-back" onClick={() => this.props.goBackToSubjects(0)}>Gå tillbaka till ämnen</Button>
                        </h2>
                    </div>
                    <div className="subjects">
                        <CardDeck>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '2%', width: '50%'}} src={img.samhalle}/>
                                <CardBody>
                                    <CardTitle>Demokratin i världen</CardTitle>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}}>Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '2%', width: '50%'}} src={img.svenska}/>
                                <CardBody>
                                    <CardTitle>Grundlagar</CardTitle>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} >Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '2%', width: '50%'}} src={img.samhalle}/>
                                <CardBody>
                                    <CardTitle>Politiska partier</CardTitle>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} >Redigera</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '2%', width: '50%'}} src={img.plus}/>
                                <CardBody>
                                    <CardLink >
                                        <Button style={{marginBottom: '2%'}} onClick={this.handleClick}>Skapa ny övning</Button>
                                    </CardLink>
                                </CardBody>
                            </Card>
                        </CardDeck>
                    </div>
                    <Footer/>
                </div>
            )
        }else if(this.state.show == 1){
            return(<CreateQuiz/>);
        }

        else {
            return(<Course id={id} title={course[id-1].title} goBackToCourseList={this.handleClick}/>);

        }
    }
}
