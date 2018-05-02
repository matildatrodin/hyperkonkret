import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../../styles/createQuiz.css';
import CreateQuestion from "./createQuestion";


export default class CreateQuiz extends React.Component {

    render(){
        return(
            <div>
            <h1>Skapa ett quizzzzz 🐝 </h1>
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
                    <CreateQuestion/>
                </FormGroup>

                <Button>Skapa quiz</Button>
            </Form>
            </div>
        );
}

}
