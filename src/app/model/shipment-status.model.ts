export class ShipmentStatus {
  constructor(
    public id: string,
    public AWB: string,
    public omniUpdateStatus: boolean, //default it's false
    public oracleUpdateStatus: boolean, //default it's false
    public statusDate: Date,
    public statusMessage: string,
    public receiptConfirmation: boolean
  ) {}
}