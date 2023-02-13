import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Packing } from '../models/packing.model';

@Injectable({
  providedIn: 'root',
})
export class PackingService {
  private readonly dbPath = '/packing';
  private readonly packingLists: AngularFireList<Packing>;

  constructor(private db: AngularFireDatabase) {
    this.packingLists = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Packing> {
    return this.packingLists;
  }

  create(packing: Packing): any {
    return this.packingLists.push(packing);
  }

  update(key: string, value: any): Promise<void> {
    return this.packingLists.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.packingLists.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.packingLists.remove();
  }
}
