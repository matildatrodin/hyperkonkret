import React from 'react';
import PropTypes from 'prop-types';
import tally from '../helpers/tally';
import '../../styles/results.css';
import {Footer} from './footer';

const images = {
    thumb: require('../../images/icons/tummeupp.png')
}

const Results = ({ userAnswers, score, restartQuiz }) => {
  const triesTotal = tally(userAnswers);
/*  const oneTry = triesTotal[1] && <div><strong>{triesTotal[1]}</strong> på första försöket.</div>;
  const twoTries = triesTotal[2] && <div><strong>{triesTotal[2]}</strong> på andra försöket.</div>;
  const threeTries = triesTotal[3] && <div><strong>{triesTotal[3]}</strong> på tredje försöket.</div>;
  const fourTries = triesTotal[4] && <div><strong>{triesTotal[4]}</strong> på fjärde försöket.</div>;*/

  return (
    <div className="results-container">
        <img src={images.thumb} className="resultpic" />
      <div>Du klarade övningen,</div>
      <div className="bottom-text">bra jobbat!</div>
    </div>
  );
}

Results.propTypes = {
  userAnswers: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired
};

export default Results;
