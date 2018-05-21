import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, CardColumns, Row, Container, CardDeck, CardLink } from 'reactstrap';
import '../../images/bild2.jpg';
import '../../styles/teacherPage.css';
import {Footer} from '../modules/footer';


export default class CoursePage extends React.Component {



    render() {
        return (
            <div>
                <h3>Hejsansvejsan här ligger alla kursens quizzz</h3>h3>
                    <Button>Skapa quiz</Button>

                <CardDeck>
                    <Card>
                        <CardImg/>
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's
                                content.</CardText>
                            <CardLink >
                                <Button>Button</Button>
                            </CardLink>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg/>
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's
                                content.</CardText>
                            <CardLink >
                                <Button>Button</Button>
                            </CardLink>
                        </CardBody>
                    </Card>
                </CardDeck>
            </div>
        )
    }
};
