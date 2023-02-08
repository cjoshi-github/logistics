import { Address } from "../utils/shipFrom.utils";

export class Packing {
  key?: String | null;
  docDate?: Date;
  plNo?: String;
  shipFrom?: Address;
  shipTo?: Address;
  brandNames?: String[];
  packQty?: number;
  qty?: number;
  ctns?: number;
  plts?: number;
  weight?: number;
  isOracleGenerate?: boolean;
}