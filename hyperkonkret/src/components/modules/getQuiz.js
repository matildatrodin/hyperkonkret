import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { QuizApp } from './QuizApp';
import PropTypes from 'prop-types';
import { exerciseexample } from '../data/exerciseexample';
import { questionexample } from '../data/questionexample';
import {DragAndDrop} from './DragAndDrop';


export class GetQuiz extends React.Component{
    constructor(props){ //tar in props "id" dvs quizens id i databasen, i detta hårdkodade fall id = 1
        super(props);

    this.state = {
            quizId: this.props.id,
            quizType: this.props.id
        };
    };


    answerOption(string){ //funktion för att parse:a svaren från databasen
        const strlength = string.length;
        var s = string.substr(1,strlength-1);
        var array = s.split("]")

        return array;
    };



render(){
    let quiz = exerciseexample; // hämta quiz-objekt från databas
    let exerciseId = exerciseexample.id; //hämta questions fr databas som har detta id som exercise id
    let nrOfQuestions = questionexample.length;//antal element i array av questions hämtad fr databas
    let questionsUnsorted = [];
    let questions = [];//ska bli array med questions som passar QuizApp
    let correct = "";
    let theQuiz = null;

    for(let i = 0; i < questionexample.length; i++){
        let answers = [];

        let answerArray = questionexample[i].answer.split("\n");

        for(let n = 0; n < answerArray.length; n++){  //parse answer-string
            let arr = this.answerOption(answerArray[n]);
            let answerAlternative = <span>{arr[1]}</span>;
            answers.push(answerAlternative);
            if(arr[0] == 1){
                correct = "" + arr[1];
            };
        }


        questionsUnsorted.push({
            "question": <span>{questionexample[i].question}</span>,
            "answers": answers,
            "correct": correct
        });

    }

    //eventuellt sortera frågor
    if (this.state.quizType == 1){
      theQuiz = <QuizApp totalQuestions={2} quiz={questionsUnsorted}/>
    }
    if (this.state.quizType == 2){
      theQuiz = <DragAndDrop totalQuestions={2} quiz={questionsUnsorted}/>
    }

    return(theQuiz);

}


}
