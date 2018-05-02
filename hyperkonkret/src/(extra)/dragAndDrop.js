import * as React from "react";
import Dragula from 'react-dragula';
/*import './styles/index.css';*/
import './dragula.css';

function $(id) {
  return document.getElementById(id);
}
export class dragAndDrop extends React.Component{
render() {
var drake = Dragula([$('drag-elements'), $('drop-target')], {
  revertOnSpill: true
}).on('drop', function(el, target) {
  if (target == $('drop-target')){
  /*el.className += 'ex-moved';*/
    el.remove();
    }
  })
return(<div id="container">
    <div id='drag-elements'>
        <div className="" id="element">Element 1</div>
        <div className="" id="element">Element 2</div>
        <div className="" id="element">Element 3</div>
        <div className="" id="element">Element 4</div>
    </div>
    <div  className="" id='drop-target'>
    </div>
</div>);

}
}
