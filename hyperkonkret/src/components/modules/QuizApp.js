import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Quiz from './Quiz';
import Modal from './Modal';
import Results from './Results';
import '../../quiz/src/components/getQuiz';

export class QuizApp extends Component {
  constructor() {
    super();

    this.state = {
      questions:  [],
      userAnswers: [],
      maxQuestions: 0,
      step: 1,
      score: 0,
      modal: {
        state: 'hide',
        praise: '',
        points: ''
      }
    };

    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentWillMount() {
    const { totalQuestions } = this.props.quiz.length;
    const maxQuestions = this.props.quiz.length;
    const QUESTIONS = this.props.quiz;

    this.setState({
      questions: QUESTIONS,
      maxQuestions: maxQuestions,
      userAnswers: QUESTIONS.map(() => {
        return {
          tries: 0
        }
      })
    });
  }

  handleAnswerClick(e) {
    const { questions, step, userAnswers } = this.state;
    const isCorrect = questions[0].correct === e.target.textContent;
    const currentStep = step - 1;
    const tries = userAnswers[currentStep].tries;

    if (isCorrect && e.target.nodeName === 'LI') {
      // Prevent other answers from being clicked after correct answer is clicked
      e.target.parentNode.style.pointerEvents = 'none';

      e.target.classList.add('right');

      userAnswers[currentStep] = {
        tries: tries + 1
      };

      this.setState({
        userAnswers: userAnswers
      });

      setTimeout(() => this.showModal(tries), 750);

      setTimeout(this.nextStep, 2750);

    }

    else if (e.target.nodeName === 'LI') {
      e.target.style.pointerEvents = 'none';
      e.target.classList.add('wrong');

      userAnswers[currentStep] = {
        tries: tries + 1
      };

      this.setState({
        userAnswers: userAnswers
      });

    }
  }

  showModal(tries) {
    let praise;
    let points;

    switch (tries) {
      case 0: {
        praise = 'Wow, första försöket!';
        points = '+10';
        break;
      }
      case 1: {
        praise = 'Snyggt!';
        points = '+5';
        break;
      }
      case 2: {
        praise = 'Bra jobbat!';
        points = '+2';
        break;
      }
      default: {
        praise = 'Korrekt!';
        points = '+1';
      }
    }

    this.setState({
      modal: {
        state: 'show',
        praise,
        points
      }
    });

  }

  nextStep() {
    const { questions, userAnswers, step, score } = this.state;
    const restOfQuestions = questions.slice(1);
    const currentStep = step - 1;
    const tries = userAnswers[currentStep].tries;

    this.setState({
      step: step + 1,
      score: (() => {
        if (tries === 1) return score + 10;
        if (tries === 2) return score + 5;
        if (tries === 3) return score + 2;
        return score + 1;
      })(),
      questions: restOfQuestions,
      modal: {
        state: 'hide'
      }
    });
  }

  //måste ändra så att denna funktion gör rätt!
  restartQuiz() {
    window.location.reload();
  }

  render() {
    const { step, questions, userAnswers, maxQuestions, score, modal } = this.state;

    if (step >= maxQuestions + 1) {
      return (
        <Results
          score={score}
          restartQuiz={this.restartQuiz}
          userAnswers={userAnswers}
        />
      );
    } else return (
      <div id={"card"}>
        <Quiz
          step={step}
          questions={questions}
          totalQuestions={maxQuestions}
          score={score}
          handleAnswerClick={this.handleAnswerClick}
        />
        { modal.state === 'show' && <Modal modal={modal} /> }
      </div>
    );
  }
}
/*
QuizApp.defaultProps = {
  totalQuestions: this.props.quiz.length
}; */

QuizApp.propTypes = {
  totalQuestions: PropTypes.number.isRequired
};


