import { ItemInfo, ItemSize } from "./../models/model";
import { MasterData } from "../models/model";
import * as Mockjs from "mockjs";

export function mockMasterData(): MasterData {
  let masterData = Mockjs.mock({
    id: Mockjs.Random.id(),
    asin: Mockjs.Random.id(),
    parentasin: Mockjs.Random.id(),
    sku: Mockjs.Random.word(),
    merchantsku: Mockjs.Random.word(),
    productname: Mockjs.Random.name(),
    brand: Mockjs.Random.word(),
    category: Mockjs.Random.word(),
    country: Mockjs.Random.word(),
    currency: Mockjs.Random.word(),
    store: Mockjs.Random.word(),
    retail: Mockjs.Random.integer(),
    salesrepr: Mockjs.Random.word(),
    productrepr: Mockjs.Random.word(),
    size: {
      packsize: Mockjs.Random.integer(100, 999),
      volume: Mockjs.Random.integer(100, 999),
      cartonlength: Mockjs.Random.integer(100, 999),
      cartonwidth: Mockjs.Random.integer(100, 999),
      cartonheight: Mockjs.Random.integer(100, 999),
      grossweight: Mockjs.Random.integer(100, 999),
      netweight: Mockjs.Random.integer(100, 999),
      cartonwidthin: Mockjs.Random.integer(100, 999),
      cartonheightin: Mockjs.Random.integer(100, 999),
      grossweightlb: Mockjs.Random.integer(100, 999),
      netweightlb: Mockjs.Random.integer(100, 999),
    } as ItemSize,
    info: {
      sswosfc: Mockjs.Random.integer(100, 999),
      sswoscndc: Mockjs.Random.integer(100, 999),
      origin: "NINGBO",
      prodlt: Mockjs.Random.integer(100, 999),
      cndclt: Mockjs.Random.integer(100, 999),
      totallt: Mockjs.Random.integer(100, 999),
    } as ItemInfo,
  } as MasterData);
  return masterData;
}

export function mockMasterDataList(count = 50): MasterData[] {
  let masterDataList: MasterData[] = [];
  count = Mockjs.Random.integer(30, 200);
  masterDataList = [...Array(count)].map((c, i) => mockMasterData());
  return masterDataList;
}
