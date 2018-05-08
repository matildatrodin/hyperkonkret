import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Example extends Component {
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
        <Button color="grey" onClick={this.toggle} style={{ marginBottom: '1rem' }}>H</Button>
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

export default Example;
