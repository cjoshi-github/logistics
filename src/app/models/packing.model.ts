import { Address } from "./address.model";

export class Packing {
  key?: string | null;
  docDate?: Date;
  plNo?: string;
  shipFrom?: Address;
  shipTo?: Address;
  brandNames?: string[];
  packQty?: number;
  qty?: number;
  ctns?: number;
  plts?: number;
  weight?: number;
  isOracleGenerate?: boolean;
}