import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { QuizApp } from './QuizApp';
import PropTypes from 'prop-types';
import { exerciseexample } from '../data/exerciseexample';
import { questionexample } from '../data/questionexample';


export class GetQuiz extends React.Component{
    constructor(props){ //tar in props "id" dvs quizens id i databasen, i detta hårdkodade fall id = 1
        super(props);

    this.state = {
            quizType: this.props.id,
            course_id: this.props.course

        };
    };


    answerOption(string){ //funktion för att parse:a svaren från databasen
        const strlength = string.length;
        var s = string.substr(1,strlength-1);
        var array = s.split("]")

        return array;
    };

    answerOptionDragNDrop(string){
        var array = string.split("[=]");
        return array;
    };

    createMultipleChoice(questionArray){
        let correct = "";
        let questionsUnsorted = [];
        for(let i = 0; i < questionArray.length; i++){
            let answers = [];
            let answerArray = questionArray[i].answer.split("\n");

            for(let n = 0; n < answerArray.length; n++){  //parse answer-string
                let arr = this.answerOption(answerArray[n]);
                let answerAlternative = <span>{arr[1]}</span>;
                answers.push(answerAlternative);
                if(arr[0] == 1){
                    correct = "" + arr[1];
                };
            }

            let concreteArray = questionArray[i].concrete.split("\n");


            questionsUnsorted.push({
                "question": <span>{questionArray[i].question}</span>,
                "answers": answers,
                "correct": correct,
                "concrete": concreteArray,
                "image": questionArray[i].image
            });

        }
        return questionsUnsorted;
    }


render(){
    let quiz = exerciseexample[this.state.course_id]; // hämta quiz-objekt från databas
//  let exerciseId = exerciseexample.id; //hämta questions fr databas som har detta id som exercise id
    let nrOfQuestions = questionexample.length;//antal element i array av questions hämtad fr databas
    let questions = [];//ska bli array med questions som passar QuizApp
    let theQuiz = null;
    let questionsUnsorted = [];

    if(this.state.quizType == 1) {
        let multipleChoiceQuestions = [];

        for (let i = 0; i < questionexample.length; i++) {
            if (questionexample[i].type == "multiple-choice" && questionexample[i].exercise_id == this.state.course_id) {
                multipleChoiceQuestions.push(questionexample[i]);
            }

        }

        questionsUnsorted = this.createMultipleChoice(multipleChoiceQuestions);
        return(<QuizApp totalQuestions={2} quiz={questionsUnsorted} type={this.state.quizType} restart={this.restartQuiz}/>)
    }
    else if (this.state.quizType == 2){
        for(let i = 0 ; i < questionexample.length; i++){
            if(questionexample[i].type == "match" && questionexample[i].exercise_id == this.state.course_id){
                questionsUnsorted.push(questionexample[i]);
            }
        }
        return(<QuizApp totalQuestions={2} quiz={questionsUnsorted} type={this.state.quizType} restart={this.restartQuiz}/>)
    }

}


}
