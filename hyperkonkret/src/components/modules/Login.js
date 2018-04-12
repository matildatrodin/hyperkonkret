import React from 'react';
import '../../styles/index.css';
import { Button } from 'reactstrap';


export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {login: true, display: true};
        this.changeState = this.changeState.bind(this);
    }


    changeState() {
        this.state.login ? this.setState({login: false}) : this.setState({login: true});
        const newState = this.state.login;
        this.props.onClick(newState);
        this.setState({display: false});
    }

    render(){
        if(this.state.display){
            return(
                <div>
                    <Button onClick={this.changeState}>
                        {this.props.name}
                    </Button>
                    <br/>
                </div>

            );
        }else {
            return(null);
        }

    }

};