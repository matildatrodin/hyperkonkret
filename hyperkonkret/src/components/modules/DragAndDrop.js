
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
    questions: []
  }
};

componentDidMount(){
  Dragula([$('drag-elements'), $('drop-target')], {
    revertOnSpill: true
  })
  Dragula([$('drag-elements2'), $('drop-target2')], {
    revertOnSpill: true
  })
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
