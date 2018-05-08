
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
  Dragula([$('drag-elements1'), $('drop-target1')], {
    revertOnSpill: true
  })
  Dragula([$('drag-elements2'), $('drop-target2')], {
    revertOnSpill: true
  })
  Dragula([$('drag-elements3'), $('drop-target3')], {
    revertOnSpill: true
  })
  Dragula([$('drag-elements4'), $('drop-target4')], {
    revertOnSpill: true
  })
}

render() {
  return(
    <div id='container'>

    <div id='drag-elements'>
      <div id='drag-elements1'>
        <div id='el'>Flugsvamp</div>
      </div>
      <br/>

      <div id='drag-elements2'>
        <div id='el'>Häst</div>
      </div>
      <br/>

      <div id='drag-elements3'>
        <div id='el'>Pizza</div>
      </div>
      <br/>

      <div id='drag-elements4'>
        <div id='el'>Spanska</div>
      </div>
      <br/>
    </div>

    <div id='drop-target'>
      <div id='drop-target1'>
        Svamp
      </div>
      <br/>

      <div id='drop-target2'>
        Djur
      </div>
      <br/>

      <div id='drop-target3'>
        Mat
      </div>
      <br/>

      <div id='drop-target4'>
        Språk
      </div>
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
