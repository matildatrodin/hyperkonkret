import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const concrete = {
    image: require('../../images/logo no shadow/H-black.png'),
};

class Concrete extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <img className="concrete" src={concrete.image} width="7%" onClick={this.toggle} style={{marginBottom: '1rem'}}/>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            {this.props.info}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Concrete;
