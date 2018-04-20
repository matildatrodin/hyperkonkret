import React from 'react';
import Sidebar from 'react-sidebar';
import '../../styles/side.css';
import '../../styles/App.css';
import { Knapp } from "./knapp";
import { Login } from './Login';
import PropTypes from 'prop-types';
import {slide as Menu} from 'react-burger-menu';
import { Content } from './content';
import {Header} from "./header";
import {Footer} from "./footer";

class SideBar extends React.Component {
    showSettings(event) {
        event.preventDefault();

    }

    isMenuOpen(state) {
        return state.isOpen;
    };

    constructor(props) {
        super(props);

        this.state = {
            display: 1
        };

        this.changeState = this.changeState.bind(this);
    }

        changeState(pressedButton){

            if (pressedButton >= 2 || pressedButton <= 5) {
                this.setState({
                    display: pressedButton
                })

            }
            else {
                console.log("sideBar.changeState is in an else statement....");

            }
        }

    logOut(state){
    };

    render() {
        if (this.props.loginState){
            var addLoginButton = <Login name={"Logga ut"} onClick={this.logOut}/>;
        }


        var sidebarContent =
            <div id={"SideBar"} className="Side">
                <br/>
                <Knapp name="Om oss" onClick={this.changeState} alternative={2}/>
                <br/>
                <Knapp name="Kontakt" onClick={this.changeState} alternative={3} />
                <br/>
                <Knapp name="Progress" onClick={this.changeState} alternative={4} />
                <br/>
                <Knapp name="Kurser" onClick={this.changeState} alternative={5} />
                <br/>
                { addLoginButton }
            </div>;

        return (
            <div>
                <Menu onStateChange={this.isMenuOpen}>
                    { sidebarContent }
                </Menu>
                <Header/>
                <Content displayAlt={this.state.display}/>
                {/*<Footer/>*/}
            </div>

        );
    }
}

export default SideBar;

/*<BrowserRouter>
    <div>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}

        <Switch>
            <Route exact path="/" component={TestSida}/>
            <Route exact path="/about" component={TestSidaIgen}/>
        </Switch>
    </div>
</BrowserRouter>*/




