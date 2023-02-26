import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { map } from 'rxjs';
import { Address } from '../models/address.model';
import { Packing } from '../models/packing.model';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private readonly dbPath = '/addresses';
  private readonly addresses: AngularFireList<Address>;

  constructor(private db: AngularFireDatabase) {
    this.addresses = db.list(this.dbPath);
  }

  getById(id: string) {
    let packing = this.db.object(this.dbPath + '/' + id);
    return packing;
  }
  getAll() {
    return this.addresses
    .snapshotChanges()
    .pipe(
      map((changes) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val()}))
      )
    );
  }

  create(packing: Packing): any {
    return this.addresses.push(packing);
  }

  update(key: string, value: any): Promise<void> {
    return this.addresses.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.addresses.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.addresses.remove();
  }
}
