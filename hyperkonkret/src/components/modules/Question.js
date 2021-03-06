import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';
import Concrete from './Concrete';

const Question = ({ question, answers, concrete, image, handleAnswerClick }) => {

let picture = <div></div>
if (image != ""){
picture = <img src={image} style={{marginBottom: '2rem'}}/>
}

  return (
    <li className="question">
      {picture}
      <h2 className="question-title">
      {question}
      </h2>
      <Concrete info={concrete}/>
      <ol className="question-answers">
        {answers.map((answer, index) => {
          return (
            <Answer
              key={JSON.stringify(answer.props.children)}
              answer={answer}
              handleAnswerClick={handleAnswerClick}
            />
          );
        })}
      </ol>
    </li>
  );
}

Question.propTypes = {
  question: PropTypes.element.isRequired,
  answers: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default Question;

/*
lägg till video: (ex)
<iframe height="300" src="//www.youtube.com/embed/SgqlVIFVbQg?rel=0" frameborder="0" allowfullscreen></iframe>
*/
