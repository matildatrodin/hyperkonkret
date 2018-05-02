import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class CreateDescription extends React.Component {

    render(){
        console.log(this.props.list);
        return(
            <div>
                {this.props.list.map((el) => (
                    <FormGroup check>
                        <Label check>
                            Beskrivning {el.id + 1}
                            <Input type="textarea" name="text" id={el.id}/>
                            <Button onClick={() => this.props.remove(el.id)}>x</Button>
                        </Label>
                    </FormGroup>
                ))}
            </div>);
    }
}