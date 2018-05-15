import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../../styles/createQuiz.css';
import CreateQuestion from "./createQuestion";
import TypeOfQuestion from './typeOfQuestion';
import {Header} from "../modules/header";

export default class CreateQuiz extends React.Component {

    render(){
        return(
            <div>
                <Header/>
                <div className="quiz-body">
                    <h2>Skapa en övning</h2>
                    <div className="info">Här skapar du en ny övning. I de översta fälten fyller du i vad övningen heter och en beskrivning av vad ämnet handlar om. Sedan lägger du till olika typer av frågor genom att trycka på knappen "välj typ av fråga"</div>
                    <Form className="quiz">
                        <FormGroup>
                            <br/>
                            <Label>Namn</Label>
                            <Input type="text" name="header" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Beskrivning</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                        <FormGroup>
                            <TypeOfQuestion/>
                        </FormGroup>

                        <button className="create-question-button">Skapa övning</button>
                    </Form>
                </div>
            </div>
        );
}

}
