import QuizApp from '../modules/QuizApp';
import React from 'react';
/*import '../../quiz/src/style.css';
import '../../styles/App.css';*/

export class Course extends React.Component {

    constructor() {
        super();//ta in props för vilken kurs/quiz som ska visas?

        this.state = {
            show: 0
        }
    }

    componentWillMount(){
        this.state.show = this.props.id;
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
