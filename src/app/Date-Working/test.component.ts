import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map } from 'rxjs/internal/operators/map';
import { Data } from './data.model';
import { Utils } from '../utils/date.utils';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  
  dateUI: Date = new Date();
  dataList?: Data[];
  private dbPath = '/myDate';
  _dateFireList: AngularFireList<Data>;

  constructor(private db: AngularFireDatabase) {
    this._dateFireList = db.list(this.dbPath);
    this.readData();
  }

  sendData() {
    const data: Data = new Data();
    data.dateString = this.dateUI.toString();
    this._dateFireList.push(data);
    console.log('Date is stored...');
  }

  readData() {
    this._dateFireList
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((data) => {
        this.dataList = data;
        this.dateUI = Utils.anyToDate(this.dataList[0].dateString);
      });
  }
}
