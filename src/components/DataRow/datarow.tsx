import { Button } from "@mui/material";
import React, { Component, Fragment } from "react";
import "./datarow.scss";
import style from "./datarow.module.scss";

// type AppDataRowProp = MasterData & { children: any };
interface AppDataRowProp {
  data: any;
  children?: any;
  colconfigure: any[];
}
export default class AppDataRow extends Component<AppDataRowProp, any> {
  renderChild() {
    if (this.props.children) {
      return <div>{this.props.children}</div>;
    }
    return;
  }

  render() {
    return (
      <div className={[`${style.datarow}`, `AppDataRow`].join(" ")}>
        {this.props.colconfigure.map((col) => {
          return (
            <span className="cell" style={{ width: col.width }}>
              {this.props.data[col.prop]}
            </span>
          );
        })}
      </div>
    );
  }
}
