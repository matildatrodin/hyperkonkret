import { QuizApp } from '../modules/QuizApp';
import React from 'react';
/*import '../../quiz/src/style.css';
import '../../styles/App.css';*/
import { Button } from 'reactstrap';

import { GetQuiz } from '../modules/getQuiz';

export class Course extends React.Component {

    constructor() {
        super();//ta in props för vilken kurs/quiz som ska visas?

        this.state = {
            show: 2
        }
    }

    componentWillMount(){
        this.state.show = 1;
    }


    handleClick(showQuiz){ //på vilken quiz du vill göra
        if (showQuiz == 1){
            this.setState({ show: 2 });

        }
        else if (showQuiz == 2){
            this.setState({ show: 1 });

        }
    }

    render() {
        if(this.state.show == 1){
            return(
                <div>
                    <GetQuiz id={1}/>
                </div>);
        }
        else if (this.state.show == 2){
            return(
                <div>
                    <GetQuiz id={2} />
                </div>
            )
        }
        else{
            return(<h1>Finns inget sådant quiz!</h1>);
        }
    }
}
