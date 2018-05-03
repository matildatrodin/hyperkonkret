import React from 'react';
import { Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export class CreateTextQuestion extends React.Component{


    render(){
        return(
            <FormGroup>
                <Label for="exampleText">Fråga:</Label>
                <Input type="textarea" name="text" id="exampletext" placeholder="Skriv din fråga här" />
                <Label for="exampleFile">Lägg till fil:</Label>
                <Input type="file" name="file" id="exampleFile" />
                <Button>Skapa fråga</Button>
            </FormGroup>


        );
    }
}