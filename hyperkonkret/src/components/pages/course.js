import { QuizApp } from '../modules/QuizApp';
import React from 'react';
import { Button } from 'reactstrap';
import { GetQuiz } from '../modules/getQuiz';
import '../../styles/quizButtons.css';
import { Header } from '../modules/header';

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
                    <button id="exit" onClick={() => this.handleClick(0)}>Avsluta övning</button>
                </div>
            )
        }
        else{
            return(
                <div>
                    <Header/>
                    <h2>Övningar i {this.props.title}</h2>
                    <button id="multiplechoice" onClick={() => this.handleClick(1)}>Gör en flervalsövning</button>
                    <button id="drag-and-drop" onClick={() => this.handleClick(2)}>Gör en drag-and-drop övning</button>
                    <button id="exit" onClick={() => this.props.goBackToCourseList(0)}>Gå tillbaka till kurser</button>
                </div>

        );
        }
    }
}
