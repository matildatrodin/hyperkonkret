import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CreateAnswer from './createAnswer';
import CreateDescription from "./createDescription";

export default class CreateQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            answers: [
                { id: 0 },
                { id: 1 }
            ],
            nextId: 2,
            descriptions: [
                { id: 0 }
            ],
            nextDescId: 1
        };

        this.toggle = this.toggle.bind(this);
        this.removeAnswer = this.removeAnswer.bind(this);
        this.addAnswer = this.addAnswer.bind(this);
        this.removeDescription = this.removeDescription.bind(this);
        this.addDescription = this.addDescription.bind(this);
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

    addDescription(){
        var next = this.state.nextDescId;
        this.setState({descriptions: this.state.descriptions.concat([{id: next}])});
        this.setState({nextDescId: next+1});
    }

    removeDescription(ind){
        this.state.descriptions.splice(ind, 1);
        for(var n=(ind); n < (this.state.nextDescId - 1); n++){
            var currentId = this.state.descriptions[n].id;
            var newId = currentId-1;
            this.state.descriptions[n].id = newId;
            this.forceUpdate();
        }
        var next = this.state.nextDescId;
        this.setState({nextDescId: next-1});

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
                            <FormGroup tag="fieldset" id="descriptions">
                                <Label for="exampleText">Beskrivning av fråga - Hyperkonkret</Label>
                                <FormGroup id="descrip">
                                    <CreateDescription list={this.state.descriptions} remove={this.removeDescription}/>
                                        <FormGroup>
                                            <Button color="primary" onClick={this.addDescription}>Lägg till frågebeskrivning</Button>
                                        </FormGroup>
                                </FormGroup>
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
                                <Button color="primary" onClick={this.addAnswer}>Lägg till svar</Button>
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
