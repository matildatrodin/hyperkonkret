import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../../styles/createQuiz.css';
import CreateQuestion from "./createQuestion";
import TypeOfQuestion from './typeOfQuestion';

export default class CreateQuiz extends React.Component {

    render(){
        return(
            <div>
            <h2>Skapa en övning </h2>
            <Form className="quiz">
                <FormGroup>
                    <Label>Namn</Label>
                    <Input type="text" name="header" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Beskrivning</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                    <TypeOfQuestion />
                </FormGroup>

                <Button>Skapa övning</Button>
            </Form>
            </div>
        );
}

}
