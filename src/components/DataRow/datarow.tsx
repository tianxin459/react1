import { Button } from "@mui/material";
import React, { Component, Fragment } from "react";
import "./datarow.scss";
import style from "./datarow.module.scss";
import AppDataCell from "../DataCell/DataCell";

// type AppDataRowProp = MasterData & { children: any };
interface Props {
  data: any;
  children?: any;
  colconfigure: any[];
  onCellValueChange: (data: any, prop: string) => void;
}
export default class AppDataRow extends Component<Props, any> {
  renderChild() {
    if (this.props.children) {
      return <div>{this.props.children}</div>;
    }
    return;
  }

  onChangeHandler = (data: any, prop: string) => {
    this.props.onCellValueChange(data, prop);
  };

  render() {
    return (
      <div className={[`${style.datarow}`, `AppDataRow`].join(" ")}>
        {this.props.colconfigure.map((col) => {
          return (
            <div key={col.prop} className="cell" style={{ width: col.width }}>
              <AppDataCell data={this.props.data[col.prop]} onChange={(event) => this.onChangeHandler(event, col.prop)}></AppDataCell>
            </div>
          );
        })}
      </div>
    );
  }
}
