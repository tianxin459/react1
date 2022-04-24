import { connect } from "react-redux";
import React, { Component } from "react";

interface Props {
  cc: number;
  increment1: () => void;
  decrement: () => void;
}

interface State {}

export class Counter extends Component<Props, State> {
  render() {
    return (
      <div>
        <div>{this.props.cc}</div>
        <button onClick={this.props.increment1}>点我+1</button>
        <button onClick={this.props.decrement}>点我-1</button>
      </div>
    );
  }
}

//该函数作为connect的第一个参数，能拿到state
//映射state到组建的props上
const mapStateToProps = (state: any) => ({ cc: state.counter });

//该函数作为connect的第二个参数，能拿到dispatch
//映射dispatch方法到组建的props上
const mapDispatchToProps = (dispatch99: any) => {
  return {
    increment1() {
      dispatch99({
        type: "increment",
      });
    },
    decrement() {
      dispatch99({
        type: "decrement",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
