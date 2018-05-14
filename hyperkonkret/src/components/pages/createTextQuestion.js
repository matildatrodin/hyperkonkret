import React from 'react';
import { Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import TypeOfQuestion from './typeOfQuestion';
import CreateDescription from './createDescription';

export default class CreateTextQuestion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            nextId: 2,
            descriptions: [
                { id: 0 }
            ],
            nextDescId: 1
        };

        this.toggle = this.toggle.bind(this);
        this.removeDescription = this.removeDescription.bind(this);
        this.addDescription = this.addDescription.bind(this);
    }

    componentWillUnmount(){
        window.location.reload();


    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
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
            <div>
                <Button onClick={this.toggle}>Lägg till textsvarsfråga</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Lägg till fråga</ModalHeader>
                    <ModalBody>
                        <Form className="quiz">
                            <FormGroup>
                                <Label>Fråga</Label>
                                <Input style={{height: '100px'}}type="text" name="header" />
                            </FormGroup>
                            <FormGroup tag="fieldset" id="descriptions">
                                <Label for="exampleText">Beskrivning av fråga - Hyperkonkret</Label>
                                <FormGroup>
                                    <CreateDescription list={this.state.descriptions} remove={this.removeDescription}/>
                                    <Button style={{marginTop: '10px', marginLeft: '20px', fontSize: '12px'}} color="primary" onClick={this.addDescription}>Lägg till frågebeskrivning</Button>
                                </FormGroup>
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
                        <Button color="success" onClick={this.toggle}>Skapa fråga</Button>
                        <Button color="secondary" onClick={this.toggle}>Avbryt</Button>
                    </ModalFooter>
                </Modal>
            </div>


        );
    }
}