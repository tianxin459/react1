import { connect } from "react-redux";
import React, { Component } from "react";

interface Props {
  ct: number;
}

interface State {}

export class About extends Component<Props, State> {
  state = {};

  render() {
    return <div>Counter={this.props.ct}</div>;
  }
}

const mapStateToProps = (state: { counter: number }) => ({ ct: state.counter });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
