import React, { Component } from "react";
import "./Counter.css";

class CounterButton extends Component {
  // Define the initial state in constructor
  constructor() {
    super();

    // this.state = {
    //     counter : 0
    // }

    // this.increment = this.increment.bind(this)
    // this.decrement = this.decrement.bind(this)
  }

  //render = () => {
  render() {
    return (
      <div className="Counter">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>
          +{this.props.by}
        </button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>
          -{this.props.by}
        </button>
      </div>
    );
  }

  // increment () {
  //     this.setState(
  //     (prevState) => {
  //         return {counter: prevState.counter + this.props.by}
  //     }
  //     );
  //     this.props.incrementMethod(this.props.by)
  // }

  // decrement () {
  //     this.setState(
  //     (prevState) => {
  //         return {counter: prevState.counter - this.props.by}
  //     }
  //     );
  //     this.props.decrementMethod(this.props.by)
  // }
}

CounterButton.defaultProps = {
  by: 1,
};

export default CounterButton;
