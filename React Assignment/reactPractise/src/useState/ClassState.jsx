import React, { Component } from "react";
import { Plus } from "react-feather";
import { Button } from "reactstrap";

export default class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      count: 100,
      amount: 210,
    };
  }
  incCounter() {
    this.setState({ 
        count: this.state.count + 100,
    });
  }
  incAmount(){
    this.setState({
        amount: this.state.amount + 10
    })
  }
  render() {
    return (
      <div>
        <span>Count is {this.state.count}</span>
        <Button onClick={() => this.incCounter()}><Plus/> Count</Button>
        <hr />
        <span>Amount is {this.state.amount}</span>
        <Button onClick={()=>{
            this.incAmount()
        }}><Plus/> Amount</Button>
      </div>
    );
  }
}
