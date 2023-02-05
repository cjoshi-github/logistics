import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map } from 'rxjs/internal/operators/map';
import { PackingList } from './data.model';
import { Utils } from '../utils/date.utils';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {

  private dbPath = '/packing'; //database name into firebase
  private _dateFireList: AngularFireList<PackingList>; //list object
  
  // protected dateUI: Date = new Date();  //UI into component with the type of Date
  private packingList: PackingList = new PackingList();  //temp var. for converting date to string. when sending data to the server
  protected packingLists?: PackingList[];  //list of data will be store intoo this


  constructor(private db: AngularFireDatabase) {
    this._dateFireList = db.list(this.dbPath);  //init database
    this.readData();  //reading data when init.
  }

  saveData(form: NgForm) {
    this.packingList.docDate = form.value.docDate.toString();  //converting object to date string for Firebase data store
    this.packingList.plNo = form.value.plNo.toString();
    this.packingList.shipFrom = form.value.shipFrom.toString();
    this.packingList.shipTo = form.value.shipTo.toString();
    this.packingList.brandName = ["a","b","c"];
    this.packingList.packQty = 556.32;
    this.packingList.qty = 123.5;
    this.packingList.ctns = 5;
    this.packingList.plts = 2;
    this.packingList.weight = 66.321;
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
        console.log(this.packingLists);
        // this.dateUI = Utils.anyToDate(this.packingLists[0].docDate); //Updating & Converting UI with date of first array 
      }); 
  }
}
