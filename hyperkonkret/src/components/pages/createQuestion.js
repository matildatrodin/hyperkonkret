import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class CreateQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }



    render(){
        return(
            <div>
                <Button color="danger" onClick={this.toggle}>Lägg till fråga</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Lägg till fråga</ModalHeader>
                    <ModalBody>
                        <Form className="quiz">
                            <FormGroup>
                                <Label>Fråga</Label>
                                <Input type="text" name="header" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Beskrivning</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="file" name="file" id="exampleFile" />
                                <FormText color="muted">
                                    Välj t.ex. en bild du vill ha till din fråga...
                                </FormText>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Skapa fråga</Button>
                        <Button color="secondary" onClick={this.toggle}>Avbryt</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

}