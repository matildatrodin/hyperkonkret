import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, CardColumns, Row, Container, CardDeck, CardLink } from 'reactstrap';
import '../../images/bild2.jpg';
import '../../styles/teacherPage.css';
import Course from './coursePage';

const items = [
    {
        image: require('../../images/bild2.jpg')
    }
];

const course = {
    id: 1
};


export default class TeacherPage extends React.Component {

    render() {
        return (
            <div>
                <CardDeck>
                <Card>
                    <CardImg/>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's
                            content.</CardText>
                        <CardLink href={"/course" + course.id}>
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
                            <CardLink href="/course">
                            <Button>Button</Button>
                            </CardLink>
                        </CardBody>
                    </Card>
                </CardDeck>
                </div>
        )
    }
};