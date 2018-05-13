import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import CreateQuestion from './createQuestion';
import {DragAndDrop} from "../modules/DragAndDrop";
import CreateTextQuestion from './createTextQuestion';

export default class TypeOfQuestion extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            dropdownOpen: false,
            value: ''
        };
    }

    componentDidMount(){
        this.setState({value: 'Välj typ av fråga'})
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        })

        if(!this.state.dropdownOpen){
           // console.log('hej');
            //this.setState({ value: 'Home' });
        }
    }

    select(event){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            value: event.target.innerText
        })

    }



    render() {



                if(this.state.value == 'Flerval'){
                    return (<CreateQuestion />);

                }
                else if(this.state.value == 'Drag-and-drop') {
                    return;
                }
                else if(this.state.value == 'Textsvar') {
                    return (<CreateTextQuestion/>);
                }
                else return (
                    <div>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} id="drop">
                            <DropdownToggle>
                                {this.state.value}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={this.select}>Flerval</DropdownItem>
                                <DropdownItem onClick={this.select} disabled>Drag-and-drop</DropdownItem>
                                <DropdownItem onClick={this.select}>Textsvar</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <br></br>
                    </div>
        );
    }

}