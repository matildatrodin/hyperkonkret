import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import {DragAndDrop} from './DragAndDrop';

const QuestionList = ({ questions, type, handleAnswerClick}) => {

  if (type==1){ // Flervalsfrågor är type 1
  return (
    <div className="question-list">
      {questions.map(question => {
        return (
          <Question
            key={question.question.props.children.toString()}
            question={question.question}
            answers={question.answers}
            concrete={question.concrete}
            handleAnswerClick={handleAnswerClick}
          />
        );
      })}
    </div>
  );
}
else if (type==2){ // Drag and drop är type 2
  return(<DragAndDrop questions={questions}/>)
}

}

export default QuestionList;
