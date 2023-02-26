import { Packing } from "./packing.model";

export class Oracle {
    key?: string | null;
    oracleNo?: string;
    packinglists?: string[];
    amount?: number;
    vWeight?: number;
    cbm?: number;
    disc?: string;
    itemType?: string;
    isInvoiceGenerate?: boolean;
    packings?: Packing[];
}
