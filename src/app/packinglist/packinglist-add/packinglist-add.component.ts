import { Component } from '@angular/core';
import { Packinglist } from '../../model/packinglist.model';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { PackinglistAddService } from '../packinglist-add.service'
import { Address } from 'src/app/model/address.model';

@Component({
  selector: 'app-packinglist-add',
  templateUrl: './packinglist-add.component.html',
  styleUrls: ['./packinglist-add.component.scss'],
})
export class PackinglistAddComponent {

  
  date1: Date = new Date("Tue Feb 28 2023 00:00:00 GMT+0530 (India Standard Time)");
  packings?: Packinglist[]
  // Showing Packing Into UI
  packing: Packinglist = new Packinglist(
    '1',
    this.date1.toString(),
    '5560',
    new Address('', 'Apparel LLC', 'abc', '', '', '', '', '', ''),
    new Address('', 'Oman', '', '', '', 'def', '', 'abc', ''),
    ['a', 'b'],
    25.6,
    50,
    30,
    40.65,
    45.65,
    false
  );

  // Store all shipFrom & shipTo Data to display into dropdown in UI
  shipTo: Address[] = [];
  shipFrom: Address[] = [];

  // Getting selected shipFrom & shipTo data from UI into single object
  selectedShipTo: Address = this.packing.shipTo;
  selectedShipFrom: Address = this.packing.shipFrom;

  constructor(private db: AngularFireDatabase, private _packingList: PackinglistAddService) {
    // Calling To Service To Render Data Into UI
    this.getShipFrom();
    this.getShipTo();
  }

  onSubmit() {
    //Loging The Entered Data into Console While Submiting Form
    this._packingList.getAllPackingLists();
    const tutRef = this.db.object('admin')
    tutRef.set(this.packing);
    alert("Packing List Added")
  }

  //Getting From Server / Services
  getShipFrom() {
    this.shipFrom.push({
      id: this.packing.shipFrom.id,
      name: this.packing.shipFrom.name,
      addressLine1: this.packing.shipFrom.addressLine1,
      addressLine2: this.packing.shipFrom.addressLine2,
      countryName: this.packing.shipFrom.countryName,
      location: this.packing.shipFrom.location,
      vatNo: this.packing.shipFrom.vatNo,
      contactPerson: this.packing.shipFrom.contactPerson,
      contactNo: this.packing.shipFrom.contactNo,
    });
  }
  getShipTo() {
    this.shipTo.push({
      id: this.packing.shipTo.id,
      name: this.packing.shipTo.name,
      addressLine1: this.packing.shipTo.addressLine1,
      addressLine2: this.packing.shipTo.addressLine2,
      countryName: this.packing.shipTo.countryName,
      location: this.packing.shipTo.location,
      vatNo: this.packing.shipTo.vatNo,
      contactPerson: this.packing.shipTo.contactPerson,
      contactNo: this.packing.shipTo.contactNo,
    });
  }
  dateToString() {
    //this.date1 = new Date("Sat Feb 06 2023 18:36:12 GMT+0530 (India Standard Time)");
    this.packing.docDate = this.date1.toString();
  }

}
