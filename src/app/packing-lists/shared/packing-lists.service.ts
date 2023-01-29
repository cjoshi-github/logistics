import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Consignee } from 'src/app/models/consignee.model';
import { Shipper } from 'src/app/models/shipper.model';
import { PackingList } from './packing-list.model';

@Injectable({
  providedIn: 'root'
})
export class PackingListsService {
  packingLists: AngularFireList<any>;
  selectedPackingList: PackingList = new PackingList();
  constructor(private firebase: AngularFireDatabase) { }

  getPackingList(){
    this.packingLists = this.firebase.list('packing-lists');
    return this.packingLists;
  }
  
  addPackingList(packingList: PackingList) {
    this.packingLists.push({
      date: packingList.date,
      plNo: packingList.plNo,
      shipper: packingList.shipper,
      consingee: packingList.consingee,
      brands: packingList.brands,
      packQty: packingList.packQty,
      qty: packingList.qty,
      ctns: packingList.ctns,
      plts: packingList.plts,
      weight: packingList.weight
    });
  }

  updatePackingList(packingList: PackingList){
    this.packingLists.update(packingList.$key,{
      date: packingList.date,
      plNo: packingList.plNo,
      shipper: packingList.shipper,
      consingee: packingList.consingee,
      brands: packingList.brands,
      packQty: packingList.packQty,
      qty: packingList.qty,
      ctns: packingList.ctns,
      plts: packingList.plts,
      weight: packingList.weight
    })
  }

  deletePackingList($key: string){
    this.packingLists.remove($key);
  }
}



// this.packingLists.push({
//   date: new Date(),
//   plNo: 5560,
//   shipper: new Shipper("R&B Fashion LLC","oman","oman","oman","oman","oman","oman"),
//   consingee: new Consignee("R&B Fashion LLC","oman","oman","oman","oman","oman","oman"),
//   brands: ["a","b","c"],
//   packQty: 50,
//   qty: 50,
//   ctns: 1,
//   plts: 1,
//   weight: 50.60,
// });