
import * as React from "react";
import Dragula from 'react-dragula';
import '../../styles/dragula.css';
import '../../styles/quiz.css';
function $(id) {
    return document.getElementById(id);
  }
export class DragAndDrop extends React.Component{
constructor() {
  super();

  this.state = {
    maxQuestions: 0,
    answers1: [],
      answers2: []
  }
};

componentDidMount() {
    Dragula([$('drag-elements'), $('drop-target')], {
        revertOnSpill: true
    })
    Dragula([$('drag-elements2'), $('drop-target2')], {
        revertOnSpill: true
    })

    let ans1 = [];
    let ans2 = [];

    for (let n= 0 ; n < this.props.questions.length ; n ++) {

        let answerArray = this.props.questions[n].answer.split("\n");
        for (let i = 0; i < answerArray.length; i++) {
            let answerDivided = answerArray[i].split("[=]");
            ans1.push(answerDivided[0]);
            ans2.push(answerDivided[1]);
        }
}
    this.setState({
       answers1: ans1,
       answer2: ans2
    });
}

render() {
  return(
    <div id='container'>
      <div id='drag-elements'>
        <div id='el'>A</div>
      </div>
      <div id='drag-elements2'>
        <div id='el'>B</div>
      </div>
      <div id='drop-target'>
        a
      </div>
      <div id='drop-target2'>
        b
      </div>
    </div>)
  }
}

/*
return(<div id='container'>
    <div id='drag-elements'>
    {this.props.quiz[0].answers.map(alt => {// [0] är hårdkodat, ska vara id:t på frågan
      return (<div id="el">{alt}</div>)
    })
    }
    </div>
    <div id='drop-target'>
    {this.props.quiz[0].answers.map(alt => {// [0] är hårdkodat, ska vara id:t på frågan
      return (<div id="el">{alt}</div>)
    })
    }
    </div>
</div>);


for(let i = 0; i < questionArray.length; i++){
  let answerArray = this.props.questions[i].answer.split("\n");

  .on('drop', function(el, target) {
    if (target == $('drop-target')){
        el.remove();
        // just nu försvinner varje element,
        // här vill vi skilja på rätt/fel svar på något sätt.
      }
    })
*/
