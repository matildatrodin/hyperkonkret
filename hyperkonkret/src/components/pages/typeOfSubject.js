import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import CreateQuestion from './createQuestion';
import CreateTextQuestion from './createTextQuestion';

export default class TypeOfSubject extends React.Component {
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
        this.setState({value: 'Välj huvudämne'})
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
            value: "Huvudämne: " + event.target.innerText
        })

    }



    render() {
        return (
                <div>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} id="drop">
                        <DropdownToggle>
                            {this.state.value}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={this.select}>Samhällskunskap</DropdownItem>
                            <DropdownItem onClick={this.select}>Geografi</DropdownItem>
                            <DropdownItem onClick={this.select}>Historia</DropdownItem>
                            <DropdownItem onClick={this.select}>Religion</DropdownItem>
                            <DropdownItem onClick={this.select}>Svenska</DropdownItem>

                        </DropdownMenu>
                    </Dropdown>
                </div>
            );
    }

}