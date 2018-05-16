import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const concrete = {
    image: require('../../images/logo no shadow/H-black.png'),
};

class Concrete extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
        descriptions: [],
        collapse: false,
        nrOpen: 0,
        nrTotal: 0
    };
  }

  componentDidMount(){
      this.setState({
          descriptions: this.props.info,
          nrOpen: 0,
          nrTotal: this.props.info.length

      })
      console.log("nrOpen efter compdidmount: " + this.state.nrOpen);
  }

  toggle() {
      if(this.state.descriptions.length <= 1){
        this.setState({ collapse: !this.state.collapse});
      }
      else {
          let id = 2;
          let actualId = id - 1;
          let newValue = 0;
          if (actualId >= this.state.nrOpen && actualId < (this.state.nrTotal)) {
              newValue = this.state.nrOpen + 1;
          }
          else if (actualId < this.state.nrOpen && actualId < (this.state.nrTotal)) {
              newValue = this.state.nrOpen - 1;
          }
          this.setState({nrOpen: newValue});
          //this.setState({collapse: !this.state.collapse})
      }
  }

  isOpen(id){

      let nrOpen = this.state.nrOpen;
      let actualId = id - 1;
      console.log("actualId är: " + actualId);
      console.log("nrOpen är: " + this.state.nrOpen);

      if(actualId >= nrOpen && actualId < (this.state.nrTotal)){
          console.log(" if sats 1");
          return false;
    }
    else if(actualId < nrOpen && actualId < (this.state.nrTotal)){
          console.log("if sats 2");
          return true;
      }


  }

  render() {
      if (this.state.descriptions.length > 1) {
          let i = 0;
          return(
              <div>
                  {this.state.descriptions.map(explanation => {
                      i++;
                       return(
                          <div>
                              <img className="concrete" src={concrete.image} width="7%" onClick={this.toggle}
                                   style={{marginBottom: '1rem'}}/>
                          <Collapse isOpen={this.isOpen(i)} id={i}>
                              <Card>
                                 <CardBody>
                                      {explanation}
                                      </CardBody>
                              </Card>
                              </Collapse>
                          </div>
                      );

                  })}

              </div>

          );
      }
      else {
          return (
              <div>
                  <img className="concrete" src={concrete.image} width="7%" onClick={this.toggle}
                       style={{marginBottom: '1rem'}}/>
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
}

export default Concrete;
