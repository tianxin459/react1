import { enumDataType } from "src/models/enum";

export interface ColConfig {
  name: string;
  prop: string;
  readonly?: boolean;
  type?: enumDataType;
  width?: number;
  frozenleft?: boolean;
  [key: string]: any;
}
