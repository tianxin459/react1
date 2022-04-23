import React from "react";
import AppDatatable from "src/components/datatable/datatable";
import DataAccess from "src/services/DataService";
import style from "./MasterDataContainer.module.scss";

let MasterDataContainer: React.FC<any> = () => {
  let data = DataAccess.getData();
  return <AppDatatable data={data}></AppDatatable>;
};

export default MasterDataContainer;
