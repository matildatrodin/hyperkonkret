import * as React from "react";
import Dragula from 'react-dragula';
import Concrete from './Concrete';
import '../../styles/quiz.css';

function $(id) {
    return document.getElementById(id);
  }

let counts;

export class DragAndDrop extends React.Component{
constructor() {
  super();

  this.state = {
    answers1: [],
    answers2: [],
    counts: 0
  }
};

componentDidMount() {
  let ans1 = [];
  let ans2 = [];
  let answerArray = this.props.answers.split("\n");
      for (let i = 0; i < answerArray.length; i++) {
          let answerDivided = answerArray[i].split("[=]");
          ans1.push(answerDivided[0]);
          ans2.push(answerDivided[1]);
      }
    this.setState({
      answers1: ans1,
      answers2: ans2
      });
}


dragulaCreator = (container) => {
      let counts = 0;
      let drake = Dragula([container, $('drop-target1'), $('drop-target2'), $('drop-target3'), $('drop-target4')], {
        revertOnSpill: true
      }).on('drop', function(el, target){
        if ((el == $('drag-elements1'))&&(target == $('drop-target1')) ||
            (el == $('drag-elements2'))&&(target == $('drop-target2')) ||
            (el == $('drag-elements3'))&&(target == $('drop-target3')) ||
            (el == $('drag-elements4'))&&(target == $('drop-target4'))){
              counts++;
              target.id = 'drop-target-correct';
              el.id = 'el-correct';

              if (counts==4) {
                //// AVSLUTA ÖVNING
              }
      }
      else {
        drake.cancel();
      }
      });
  };

render() {


  return(
    <div>
    <h2 className="question-title">
    {this.props.question}
    </h2>
    <Concrete info={this.props.concrete}/>
      <div id="question-field">
    <div id='drag-elements' ref={this.dragulaCreator}>
      <div id='drag-elements2' className="el">{this.state.answers1[1]}</div>
      <br/>
      <div id='drag-elements1' className="el">{this.state.answers1[0]}</div>
      <br/>
      <div id='drag-elements4' className="el">{this.state.answers1[3]}</div>
      <br/>
      <div id='drag-elements3' className="el">{this.state.answers1[2]}</div>
    </div>
      </div>
      <div id="question-field">
        <div id='drop-target'>
          <div id='drop-target1'>{this.state.answers2[0]}</div>
          <br/>
          <div id='drop-target2'>{this.state.answers2[1]}</div>
          <br/>
          <div id='drop-target3'>{this.state.answers2[2]}</div>
          <br/>
          <div id='drop-target4'>{this.state.answers2[3]}</div>
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
