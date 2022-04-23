import { enumDataType, enumPOType } from "./enum";
export interface DataRow {
  id?: string;
  display?: boolean;
}
export interface UserInfo {
  id: string;
  userId: string;
  name: string;
  email: string;
  phonenumber: string;
  parentasinlist: string[];
  [key: string]: any;
}

export interface ColConfig {
  name: string;
  prop: string;
  readonly?: boolean;
  type?: enumDataType;
  width?: number;
  frozenleft?: boolean;
  [key: string]: any;
}

export interface MasterData extends DataRow {
  asin: string;
  parentasin: string;
  sku: string;
  merchantsku: string;
  productname: string;
  brand: string;
  category: string;
  country: string;
  currency: string;
  store: string;
  retail: number;
  salesrepr: string;
  productrepr: string;
  size: ItemSize;
  info: ItemInfo;
}

export interface ItemSize {
  packsize: number;
  volume: number;
  cartonlength: number;
  cartonwidth: number;
  cartonheight: number;
  grossweight: number;
  netweight: number;
  cartonlengthin: number;
  cartonwidthin: number;
  cartonheightin: number;
  grossweightlb: number;
  netweightlb: number;
}

export interface ItemInfo {
  sswosfc: number;
  sswoscndc: number;
  sswosusdc: number;
  origin: string;
  prodlt: number;
  cndclt: number;
  usdclt: number;
  totallt: number;
  enableusdc: boolean;
}

export interface SalesFcst extends DataRow {
  parentasin: string;
  asin: string;
  //sku: string;
  //yrwk: string;
  // fcst = 'fcst',
  manualoverride: number;
  avgl3dpos: number;
  avgl5dpos: number;
  avgl7dpos: number;
  avgl14dpos: number;
  avgl30dpos: number;
  avgdailyfcst: number;

  //detail = 'detail',
  salessplit: number;
  n4wsalesplan: number;
  n8wsalesplan: number;
  n12wsalesplan: number;
  n16wsalesplan: number;
  n20wsalesplan: number;

  //detail = 'detail52',
  detailsalefcst: number[];
}

export interface PODetail extends DataRow {
  id: string;
  parentasin: string;
  asin: string;
  sku: string;
  po: string;
  qty: number;
  eta: string;
  etaweek: string;
  potype: enumPOType;
  createdate: string;
  createwk: string;
  lt: string;
  shipped: boolean;
  received: boolean;
  actualtd: string;
  actualta: string;
  containerid: string;
  location: string;
  availinventory: number;
}

export interface Inventory extends DataRow {
  id: string;
  parentasin: string;
  asin: string;
  yrwk: number;
  fcavailable: number;
  fctransfer: number;
  fcprocessing: number;
  fctotal: number;
  usdconhand: number;
  usdconorder: number;
  cndconhand: number;
}

export interface OrderReview extends DataRow {
  id: string;
  parentasin: string;
  asin: string;
  week: number;
  productname: string;
  salesfcst: number[];
  fcreceipt: number[];
  fcavail: number[];
  fcwos: number[];
  fcreceiptproj: number[];
  cndcshipfcst: number[];
  cndcreceipt: number[];
  cndcavail: number[];
  cndcwos: number[];
  cndcreceiptproj: number[];
  factoryorder: number[];
  usdcsupport: number[];
  usdctofc: number[];
  totalship: number[];
  usleftoverforfc: number[];
}

export interface RawPOS extends DataRow {
  id: string;
  parentasin: string;
  asin: string;
  date: string;
  qty: number;
  event: string;
  week: string;
  year: string;
  createdtime: string;
  changedtime: string;
  createdby: string;
  changedby: string;
}
