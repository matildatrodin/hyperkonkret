import React from 'react';
import '../../styles/createQuiz.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import FaClose from 'react-icons/lib/fa/close';
export default class CreateAnswer extends React.Component {

    render(){
        console.log(this.props.list);
        return(
            <div>
                {this.props.list.map((el) => (
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1"/>{' '}
                            <Input type="textarea" name="text" id={el.id}/>
                            </Label>
                            <button className="remove-answer-button" onClick={() => this.props.remove(el.id)}><FaClose/></button>
                    </FormGroup>
        ))}
            </div>);
    }
}
