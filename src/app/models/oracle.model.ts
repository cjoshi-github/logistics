import { Packing } from "./packing.model";

export class Oracle {
    key?: String | null;
    oracleNo?: String;
    packinglists?: String[];
    amount?: number;
    vWeight?: number;
    cbm?: number;
    disc?: String;
    itemType?: String;
    isInvoiceGenerate?: boolean;
}
