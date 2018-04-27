import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
                            {console.log("id:" + el.id)};
                            <Button onClick={() => this.props.remove(el.id)}>x</Button>
                        </Label>
                    </FormGroup>
        ))}
            </div>);
    }
}

