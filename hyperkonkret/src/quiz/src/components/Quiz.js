import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';

const Quiz = ({ step, questions, totalQuestions, score, handleAnswerClick }) => {
  return (
    <div className="wrapper">
      <header>
          <div className="quiz-name">
              <div className="question-count">
                  <h2>Question</h2>
                  <div className="question-number">{step}</div>
                  <div className="description">of <span>{totalQuestions}</span></div>
              </div>

              <h1 className="hejsan">Quiz</h1>

          </div>
      </header>

      <div className="questions">
        <QuestionList
          questions={questions}
          handleAnswerClick={handleAnswerClick}
        />
      </div>
    </div>
  );
}

Quiz.propTypes = {
  step: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default Quiz;
