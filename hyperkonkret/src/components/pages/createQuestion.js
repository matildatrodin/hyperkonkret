import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CreateAnswer from './createAnswer';

export default class CreateQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            answers: [
                { id: 0 },
                { id: 1 }
            ],
            nextId: 2
        };

        this.toggle = this.toggle.bind(this);
        this.removeAnswer = this.removeAnswer.bind(this);
        this.addAnswer = this.addAnswer.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    addAnswer(){
        var next = this.state.nextId;
        this.setState({answers: this.state.answers.concat([{id: next}])});
        this.setState({nextId: next+1});
    }



    removeAnswer(ind){
        this.state.answers.splice(ind, 1);
        for(var n=(ind); n < (this.state.nextId - 1); n++){
            var currentId = this.state.answers[n].id;
            var newId = currentId-1;
            this.state.answers[n].id = newId;
            this.forceUpdate();
}
        var next = this.state.nextId;
        this.setState({nextId: next-1});

    }


    render(){
        return(
            <h1>
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
                            <FormGroup tag="fieldset" id="answers">
                                <label>Svarsalternativ</label>

                                <CreateAnswer list={this.state.answers} remove={this.removeAnswer}/>
                                <FormGroup>
                                    <Button color="primary" onClick={this.addAnswer}>Lägg till svar</Button>
                                </FormGroup>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Skapa fråga</Button>
                        <Button color="secondary" onClick={this.toggle}>Avbryt</Button>
                    </ModalFooter>
                </Modal>
            </h1>
        );
    }

}
