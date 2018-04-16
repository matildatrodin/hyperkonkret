import QuizApp from '../../react-quiz/src/components/QuizApp';
import React from 'react';
import '../../react-quiz/src/style.css';

export class Course extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return(<QuizApp totalQuestions={10}/>)
    }
}