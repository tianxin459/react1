import PropTypes from "prop-types";
import React, { ChangeEvent, Component } from "react";
import style from "./DataCell.module.scss";

interface AppDataCellProps {
  data: any;
  onChange: (data: any) => void;
}

export default class AppDataCell extends Component<AppDataCellProps, { isEdit: boolean }> {
  constructor(props: AppDataCellProps) {
    super(props);

    this.state = {
      isEdit: false,
    };
  }

  toggleState = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };

  onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    this.props.onChange(event.target.value);
  };

  getReadOnlyContent = () => (
    <div className={style.AppDataCell} onClick={this.toggleState}>
      {this.props.data}
    </div>
  );

  getEditContent = () => <input className={style.AppDataCell} type="text" value={this.props.data} onChange={(e) => this.onChangeHandler(e)} />;

  getDisplayContent = () => {
    if (this.state.isEdit) return this.getEditContent();
    else return this.getReadOnlyContent();
  };

  render() {
    return this.getDisplayContent();
  }
}
