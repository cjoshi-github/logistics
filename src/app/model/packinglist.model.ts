import { Address } from "./address.model";

export class Packinglist {
  constructor(
    public id: string,
    public docDate: string,
    public plNo: string,
    public shipFrom: Address,  //Use Model Later
    public shipTo: Address,    //Use Model Later
    public brands: string[],
    public pQty: number,
    public qty: number,
    public ctns: number,
    public plts: number,
    public weight: number,
    public isOracle: boolean = false
  ) {}
}
