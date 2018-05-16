import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../../styles/createQuiz.css';
import CreateQuestion from "./createQuestion";
import TypeOfQuestion from './typeOfQuestion';
import {Header} from "../modules/header";

export default class CreateSubject extends React.Component {

    render(){
        return(
            <div>
                <Header/>
                <div className="quiz-body">
                    <h2>Skapa ett ämne</h2>
                    <div className="info">Här skapar du ett nytt ämne. I de översta fälten fyller du i vad ämnet heter och en beskrivning av vad ämnet handlar om. Sedan väljer du vilket huvudämne det ska tillhöra genom att trycka på knappen "välj huvudämne".</div>
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

                        <button className="create-question-button">Skapa Ämne</button>
                    </Form>
                </div>
            </div>
        );
    }

}
