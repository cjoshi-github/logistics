export class Oracle {
  constructor(
    public id: string,
    public oracleNo: string,
    public packinglists: string[],
    public storeName: string,
    public amount: number,
    public vWeight: number,
    public cbm: number,
    public disc: string[],
    public itemType: string,
    public isInvoiceGenerate: boolean
  ) {}
}