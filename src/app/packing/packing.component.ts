import { Component } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { Packing } from './packing.model';
import { NgForm } from '@angular/forms';
import { Address, Shipper } from '../utils/shipFrom.utils';
import { Utils } from '../utils/date.utils';
import { PackingService } from './packing.service';

@Component({
  selector: 'app-packing',
  templateUrl: './packing.component.html',
  styleUrls: ['./packing.component.scss'],
})
export class PackingComponent {

  protected packingList: Packing = new Packing();
  protected packingLists: Packing[] = [];
  protected selectedPackings: Packing[] = [];

  shipFrom: Address[] = [];
  shipTo: Address[] = [];

  constructor(private database: PackingService) {
    this.shipFrom = new Shipper().getShipFrom();
    this.shipTo = new Shipper().getShipFrom();
    this.readPackingLists();  
  }

  readPackingLists() {
    this.database.getAll().snapshotChanges()
    .pipe(
      map((changes) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))  
      )
    )
    .subscribe((data) => {
      this.packingLists = data;
    }); 
  }

  readSelectedPackingList(event: any) {
    this.packingList = event.data
    this.packingList.docDate = Utils.anyToDate(event.data.docDate);
  }

  createPackingList(form: NgForm) {
    this.packingList = form.value;
    this.packingList.docDate = form.value.docDate.toString();
    this.packingList.isOracleGenerate = false;
    this.database.create(this.packingList);
    this.clearForm();
  }

  deletePackingList() {
    this.database.delete(String(this.packingList.key));
    this.clearForm();
  }

  updatePackingList(){
    this.database.update(String(this.packingList.key), this.packingList)
  }
  clearForm() {
    this.packingList = {};
  }
}
