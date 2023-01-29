import { Consignee } from 'src/app/models/consignee.model';
import { Shipper } from 'src/app/models/shipper.model';

export class PackingList {
  $key: string;
  date: Date;
  plNo: number;
  shipper: Shipper;
  consingee: Consignee;
  brands: string[];
  packQty: number;
  qty: number;
  ctns: number;
  plts: number;
  weight: number;
}
