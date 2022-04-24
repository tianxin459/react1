import { connect, useSelector } from "react-redux";
import React, { Component } from "react";
import { RootState } from "src/redux/store";
import { counterActions, selectCounter } from "../features/counter/counterSlice";
import { ActionCreatorWithNonInferrablePayload, ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

interface Props {
  cc: number;
  incrementAB: ActionCreatorWithNonInferrablePayload<string> | ActionCreatorWithoutPayload<string>;
  decrement: ActionCreatorWithNonInferrablePayload<string> | ActionCreatorWithoutPayload<string>;
}

interface State {}

export class Counter extends Component<Props, State> {
  //   let cc = useSelector((state:RootState)=>state.counter)
  setupData = () => {
    //TODO: api call
    console.log("test");
    // this.props.increment99();
  };

  render() {
    return (
      <div>
        <div> here ={this.props.cc}</div>
        <button onClick={this.setupData}>点我+1</button>
        {/* <button onClick={this.props.decrement}>点我-1</button> */}
      </div>
    );
  }
}

// //该函数作为connect的第一个参数，能拿到state
// //映射state到组建的props上
// const mapStateToProps = (state: RootState) => ({ cc: selectCounter(state) });

// //该函数作为connect的第二个参数，能拿到dispatch
// //映射dispatch方法到组建的props上
// const mapDispatchToProps = (dispatch99: any) => {
//   return {
//     increment1() {
//       dispatch99({
//         type: "increment",
//       });
//     },
//     decrement() {
//       dispatch99({
//         type: "decrement",
//       });
//     },
//   };
// };

//该函数作为connect的第一个参数，能拿到state
//映射state到组建的props上
const mapStateToProps = (state: RootState) => ({ cc: selectCounter(state) });

//该函数作为connect的第二个参数，能拿到dispatch
//映射dispatch方法到组建的props上
const mapDispatchToProps = {
  incrementAB: counterActions.increment,
  decrement: counterActions.decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
