import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map } from 'rxjs/internal/operators/map';
import { PackingList } from './data.model';
// import { Utils } from '../utils/date.utils';
import { NgForm } from '@angular/forms';
import { Shipper } from '../utils/shipFrom.utils';
import { Utils } from '../utils/date.utils';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  currentIndex?: number;
  private dbPath = '/packing'; //database name into firebase
  private _dateFireList: AngularFireList<PackingList>; //list object
  
  // protected dateUI: Date = new Date();  //UI into component with the type of Date
  protected packingList: PackingList = new PackingList();  //temp var. for converting date to string. when sending data to the server
  protected packingLists: PackingList[] = [];  //list of data will be store intoo this
  selectedPL: PackingList = new PackingList();

  shipFrom = new Shipper().getShipFrom();
  shipTo = new Shipper().getShipFrom();

  constructor(private db: AngularFireDatabase) {
    this._dateFireList = db.list(this.dbPath);  //init database
    this.readData();  //reading data when init.
    console.log(this.shipFrom)
  }
  clearSelected() {
    this.packingList = {};
  }
  getSelectedValue() {
    this.packingList.docDate = Utils.anyToDate(this.selectedPL.docDate);  //converting object to date string for Firebase data store
    this.packingList.plNo = this.selectedPL.plNo;
    this.packingList.shipFrom = this.selectedPL.shipFrom;
    this.packingList.shipTo = this.selectedPL.shipTo;
    this.packingList.brandNames = this.selectedPL.brandNames;
    this.packingList.packQty = this.selectedPL.packQty;
    this.packingList.qty = this.selectedPL.qty;
    this.packingList.ctns = this.selectedPL.ctns;
    this.packingList.plts = this.selectedPL.plts;
    this.packingList.weight = this.selectedPL.weight;
    this.packingList.isOracleGenerate = false;
  }

  saveData(form: NgForm) {
    this.packingList = form.value;
    this.packingList.docDate = form.value.docDate.toString();  //converting object to date string for Firebase data store
    this.packingList.isOracleGenerate = false;

    this._dateFireList.push(this.packingList); //sending data to firebase database
  }

  readData() {
    this._dateFireList
      .snapshotChanges()  //for getting data with key
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))  //converting into object with key value pair
        )
      )
      .subscribe((data) => {
        this.packingLists = data;   //storing data into list
        // this.dateUI = Utils.anyToDate(this.packingLists[0].docDate); //Updating & Converting UI with date of first array 
      }); 
  }
}
