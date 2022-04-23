import React from "react";
import { ColConfig } from "src/models/configuremodel";
import style from "./DataHeader.module.scss";

interface Props {
  colconfigure: ColConfig[];
}

const AppDataHeader = (props: Props) => {
  return (
    <div className={[`${style.dataheader}`].join(" ")}>
      {props.colconfigure.map((col) => {
        return (
          <div key={col.prop} className="cell" style={{ width: col.width }}>
            {col.name}
          </div>
        );
      })}
    </div>
  );
};

export default AppDataHeader;
