import { QuizApp } from '../modules/QuizApp';
import React from 'react';
import { GetQuiz } from '../modules/getQuiz';
import '../../styles/quizButtons.css';
import { Header } from '../modules/header';
import {course, exerciseexample} from "../data/exerciseexample";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, CardColumns, Row, Container, CardDeck, CardLink } from 'reactstrap';
import {Footer} from '../modules/footer';

const img = {
    svenska: require('../../images/icons/samhalle.png'),
    geografi: require('../../images/icons/geografi-green.png'),
    geografi2: require('../../images/icons/geografi.png'),
    historia: require('../../images/icons/historia-brun.png'),
    religion: require('../../images/icons/religion-orange.png'),
    samhalle: require('../../images/icons/so_lila.png'),
    plus: require('../../images/icons/plus.png')
};

export default class Course extends React.Component {

    constructor() {
        super();//ta in props för vilken kurs/quiz som ska visas?
        this.state = {
            show: 0,
        }
    }


    handleClick(showQuiz){ //på vilken quiz du vill göra
      this.setState({ show: showQuiz });
    }


    render() {
      let id = this.props.id;

      if(this.state.show != 0){
            return(
                <div>
                    <Header/>
                    <GetQuiz course={this.props.id} id={this.state.show} />
                    <Button style={{marginTop: '2%'}} onClick={() => this.handleClick(0)}>Avsluta övning</Button>
                </div>
            )
        }
        else if(this.props.id == 1){
            return(
                <div>
                    <Header/>
                    < div className="title-subjects">
                        <h2>Övningar inom {this.props.title}
                        <Button id="go-back" onClick={() => this.props.goBackToCourseList(0)}>Gå tillbaka till ämnen</Button>
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
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '6%', width: '50%'}} src={img.geografi}/>
                                <CardBody>
                                    <CardTitle>{exerciseexample[0].title}</CardTitle>
                                    <CardText>
                                        {exerciseexample[0].description}
                                    </CardText>
                                    <CardLink >
                                        <Button id="multiplechoice" onClick={() => this.handleClick(1)}>Starta övning</Button>                                    </CardLink>
                                </CardBody>
                            </Card>
                            <Card style={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                marginBottom: '2%',
                                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                            }}>
                                <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '6%', width: '50%'}} src={img.geografi2}/>
                                <CardBody>
                                    <CardTitle>{exerciseexample[2].title}</CardTitle>
                                    <CardText>
                                        {exerciseexample[2].description}
                                    </CardText>
                                    <CardLink >
                                        <Button id="multiplechoice" >Starta övning</Button>                                    </CardLink>
                                </CardBody>
                            </Card>
                        </CardDeck>
                    </div>
                    <Footer/>

                </div>

        );
        }
        else if(this.props.id == 2){
          return(
              <div>
                  <Header/>
                  < div className="title-subjects">
                      <h2>Övningar inom {this.props.title}
                          <Button id="go-back" onClick={() => this.props.goBackToCourseList(0)}>Gå tillbaka till kurser</Button>
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
                              <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '6%', width: '50%'}} src={img.samhalle}/>
                              <CardBody>
                                  <CardTitle>{exerciseexample[1].title}</CardTitle>
                                  <CardText>
                                      {exerciseexample[1].description}
                                  </CardText>
                                  <CardLink >
                                      <Button id="drag-and-drop" onClick={() => this.handleClick(2)}>Starta övning</Button>
                                  </CardLink>
                              </CardBody>
                          </Card>
                          <Card style={{
                              minWidth: '300px',
                              maxWidth: '300px',
                              marginBottom: '2%',
                              boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, .2)'
                          }}>
                              <CardImg style={{marginLeft: '25%', marginRight: '25%', marginTop: '6%', width: '50%'}} src={img.svenska}/>
                              <CardBody>
                                  <CardTitle>{exerciseexample[3].title}</CardTitle>
                                  <CardText>
                                      {exerciseexample[3].description}
                                  </CardText>
                                  <CardLink >
                                      <Button id="multiplechoice" >Starta övning</Button>                                    </CardLink>
                              </CardBody>
                          </Card>
                      </CardDeck>
                  </div>
                  <Footer/>

              </div>

          );

      }
    }
}
