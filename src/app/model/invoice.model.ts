export class Invoice {
  constructor(
    public id: string,
    public invoiceDate: Date,
    public invoiceNo: string,
    public oracles: string[],
    public isTruckArranged: boolean
  ) {}
}