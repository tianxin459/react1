import { Button } from "@mui/material";
import React, { Component, Fragment } from "react";
import { MasterData } from "src/models/model";
import Button2 from "../btn/btn";
import "./datarow.scss";

// type AppDataRowProp = MasterData & { children: any };
export default class AppDataRow extends Component<
  MasterData & { children?: any },
  any
> {
  renderChild() {
    if (this.props.children) {
      return <div>{this.props.children}</div>;
    }
    return;
  }

  render() {
    return (
      <Fragment>
        <Button> {this.props.asin}</Button>
        {this.renderChild()}
      </Fragment>
    );
  }
}
