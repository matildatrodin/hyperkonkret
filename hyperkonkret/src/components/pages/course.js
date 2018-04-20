import QuizApp from '../../quiz/src/components/QuizApp';
import React from 'react';
/*import '../../quiz/src/style.css';
import '../../styles/App.css';*/

export class Course extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return(
            <div>
                <QuizApp totalQuestions={10} />
            </div>);
    }
}