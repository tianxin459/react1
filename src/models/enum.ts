export enum enumMasterDataType {
  basic = "basic",
  size = "size",
  info = "info",
}

export enum enumSalesFcstDataType {
  fcst = "fcst",
  detail = "detail",
  detail52wk = "detail52wk",
}

export enum enumDataType {
  none = "none",
  string = "string",
  number = "number",
  boolean = "boolean",
  percentage = "percentage",
  date = "date",
}

export enum enumOperation {
  ">" = ">",
  "=" = "=",
  "<" = "<",
}

export enum enumPOType {
  unknown = "unknown",
  海外到FC = "FC", //海外到FC
  国内仓到USDC = "USDC", //国内仓到USDC
  工厂到CNDC = "CNDC", //工厂到CNDC
}

export enum enumEvent {
  unknown = "unknown",
  LD = "LD",
  七天促销 = "七天促销",
  会员折扣 = "会员折扣",
  Coupon = "Coupon",
  社交 = "社交",
  DN = "DN",
  服务商 = "服务商",
}
