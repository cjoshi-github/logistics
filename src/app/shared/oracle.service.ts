import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Oracle } from '../models/oracle.model';
import { getDatabase, onValue, ref, set } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class OracleService {
  private readonly dbPath = '/oracle';
  private readonly oracleList: AngularFireList<Oracle>;

  
  constructor(private db: AngularFireDatabase) {
    this.oracleList = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Oracle> {
    return this.oracleList;
  }

  create(packing: Oracle): any {
    return this.oracleList.push(packing);
  }

  update(key: string, value: any): Promise<void> {
    return this.oracleList.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.oracleList.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.oracleList.remove();
  }
}
