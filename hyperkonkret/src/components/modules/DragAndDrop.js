
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
  }).on('drop', function(el, target) {
    if (target == $('drop-target')){
        el.remove();
        // just nu försvinner varje element,
        // här vill vi skilja på rätt/fel svar på något sätt.
      }
    })
}

render() {
  return(<div id='container'>
      <div id='drag-elements'>
      {this.props.quiz[0].answers.map(alt => {
      // [0] är hårdkodat, ska vara id:t på frågan
        console.log("q: " + alt);
        return (<div id="el">{alt}</div>)
      })
      }
      </div>
      <div id='drop-target'>
      *Dra elementen här under*
      <br/>
      (P.S. Ändra i getQuiz.js för att byta till alternativ frågor)
      </div>
  </div>);

  }
}
