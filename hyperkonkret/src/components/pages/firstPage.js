import React from 'react';
import '../../styles/firstPage.css'
import { Alert } from 'reactstrap';

export class FirstPage extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    render(){
        return(
            <div>
                <Alert color="dark">
                    <h4 className="alert-heading" align="left">Kul med saker</h4>
                    <p align="left">
                        Här kan man skriva massa saker som säger massa saker om andra saker och det är kul.
                    </p>
                    <hr />
                    <p className="mb-0" align="left">
                        Här är ett stycke till som är avgränsat av ett fint litet sträck, kul va?
                    </p>
                </Alert>
                <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                    Jag är ett meddelande som kan klickas bort!
                </Alert>
            </div>
        );
    }

}