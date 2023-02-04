export class Shipment {
  constructor(
    public id: string,
    public dispatchDate: Date,
    public invoices: string[],
    public serviceProvider: string,
    public awbNo: string,
    public trucksCount: number,
    public truckType: string,
    public mot: string,
    public shipmentType: string,
    public frieghtCharge: number,
    public saberCharger: number,
    public freightChargePerTruck: number,
    public sealNo: string,
    public etaDate: Date,
    public boeNo: string,
    public declarationNo: string,
    public remarks: string,
    public isReceipt: boolean
  ) {}
}