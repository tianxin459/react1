import { Component, Fragment } from "react";
import { enumDataType } from "src/models/enum";
import { MasterData } from "src/models/model";
import AppDataRow from "../DataRow/datarow";
import "./datatable.scss";

export default class AppDatatable extends Component<
  { data: MasterData[] },
  any
> {
  columnConfig = {
    basic: [
      {
        prop: "asin",
        name: "ASIN",
        readonly: false,
        datatype: enumDataType.string,
        width: 100,
      },
      {
        prop: "parentasin",
        name: "父ASIN",
        readonly: false,
        datatype: enumDataType.string,
        width: 100,
      },
      {
        prop: "sku",
        name: "SKU",
        readonly: false,
        datatype: enumDataType.string,
        width: 130,
      },
      {
        prop: "merchantsku",
        name: "采购SKU",
        readonly: false,
        datatype: enumDataType.string,
        width: 210,
      },
      {
        prop: "category",
        name: "品类",
        readonly: false,
        datatype: enumDataType.string,
        width: 120,
      },
      {
        prop: "brand",
        name: "品牌",
        readonly: false,
        datatype: enumDataType.string,
        width: 130,
      },
      {
        prop: "productname",
        name: "产品名称",
        readonly: false,
        datatype: enumDataType.string,
        width: 90,
      },
      {
        prop: "currency",
        name: "币种",
        readonly: false,
        datatype: enumDataType.string,
        width: 50,
      },
      {
        prop: "retail",
        name: "售价",
        readonly: false,
        datatype: enumDataType.number,
        width: 50,
      },
      {
        prop: "store",
        name: "店铺",
        readonly: false,
        datatype: enumDataType.string,
        width: 100,
      },
      {
        prop: "country",
        name: "国家",
        readonly: false,
        datatype: enumDataType.string,
        width: 50,
      },
      {
        prop: "salesrepr",
        name: "销售负责人",
        readonly: false,
        datatype: enumDataType.string,
        width: 80,
      },
      {
        prop: "productrepr",
        name: "产品负责人",
        readonly: false,
        datatype: enumDataType.string,
        width: 80,
      },
    ],
    size: [
      {
        prop: "asin",
        name: "ASIN",
        readonly: false,
        datatype: enumDataType.string,
        width: 100,
      },
      {
        prop: "size.packsize",
        name: "包装规格",
        readonly: false,
        datatype: enumDataType.number,
        width: 100,
      },
      {
        prop: "size.cartonlength",
        name: "外箱长度(cm)",
        readonly: false,
        datatype: enumDataType.number,
        width: 100,
      },
      {
        prop: "size.cartonwidth",
        name: "外箱宽度(cm)",
        readonly: false,
        datatype: enumDataType.number,
        width: 100,
      },
      {
        prop: "size.cartonheight",
        name: "外箱高度(cm)",
        readonly: false,
        datatype: enumDataType.number,
        width: 100,
      },
      {
        prop: "size.volume",
        name: "外箱体积(cbm)",
        readonly: false,
        datatype: enumDataType.number,
        width: 100,
      },
      {
        prop: "size.grossweight",
        name: "外箱毛重(kg)",
        readonly: false,
        datatype: enumDataType.number,
        width: 100,
      },
      {
        prop: "size.netweight",
        name: "外箱净重(kg)",
        readonly: false,
        datatype: enumDataType.number,
        width: 100,
      },
      {
        prop: "size.cartonlengthin",
        name: "外箱长度(in)",
        readonly: true,
        datatype: enumDataType.number,
        width: 100,
      },
      {
        prop: "size.cartonwidthin",
        name: "外箱宽度(in)",
        readonly: true,
        datatype: enumDataType.number,
        width: 100,
      },
      {
        prop: "size.cartonheightin",
        name: "外箱高度(in)",
        readonly: true,
        datatype: enumDataType.number,
        width: 100,
      },
      {
        prop: "size.grossweightlb",
        name: "外箱毛重(lb)",
        readonly: true,
        datatype: enumDataType.number,
        width: 100,
      },
      {
        prop: "size.netweightlb",
        name: "外箱净重(lb)",
        readonly: true,
        datatype: enumDataType.number,
        width: 100,
      },
    ],
    info: [
      {
        prop: "asin",
        name: "ASIN",
        readonly: false,
        datatype: enumDataType.string,
        width: 120,
      },
      {
        prop: "info.sswosfc",
        name: "FC安全库存天数",
        readonly: false,
        datatype: enumDataType.number,
        width: 120,
      },
      {
        prop: "info.sswoscndc",
        name: "国内仓安全库存天数",
        readonly: false,
        datatype: enumDataType.number,
        width: 120,
      },
      {
        prop: "info.sswosusdc",
        name: "国外仓安全库存天数",
        readonly: false,
        datatype: enumDataType.number,
        width: 120,
      },
      {
        prop: "info.origin",
        name: "出货港口",
        readonly: false,
        datatype: enumDataType.number,
        width: 120,
      },
      {
        prop: "info.productlt",
        name: "生产提前期(天)",
        readonly: false,
        datatype: enumDataType.number,
        width: 120,
      },
      {
        prop: "info.cndclt",
        name: "国内仓提前期(天)",
        readonly: false,
        datatype: enumDataType.number,
        width: 120,
      },
      {
        prop: "info.usdclt",
        name: "国外仓提前期(天)",
        readonly: false,
        datatype: enumDataType.number,
        width: 120,
      },
      {
        prop: "info.totallt",
        name: "总提前期(天)",
        readonly: false,
        datatype: enumDataType.number,
        width: 120,
      },
      {
        prop: "info.enableusdc",
        name: "是否启用海外仓",
        readonly: false,
        datatype: enumDataType.boolean,
        width: 120,
      },
    ],
  };

  render() {
    return (
      <div className="AppDatatable">
        DataTable
        {this.props.data?.map((row, i) => (
          <AppDataRow key={i} {...row}>
            {row.brand}
          </AppDataRow>
        ))}
      </div>
    );
  }
}
