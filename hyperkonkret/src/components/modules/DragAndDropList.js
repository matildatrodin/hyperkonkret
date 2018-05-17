import React from 'react';
import {DragAndDrop} from './DragAndDrop';


export class DragAndDropList extends React.Component {

render(){
  return (
    <div>
      {this.props.questions.map(question => {
        return (
          <DragAndDrop
            question={question.question}
            answers={question.answer}
            concrete={question.concrete}
          />
        );
      })}
    </div>
  );
 }
}
