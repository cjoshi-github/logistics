import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Invoice } from './invoice.model';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private readonly dbPath = '/invoice';
  private readonly invoiceList: AngularFireList<Invoice>;

  
  constructor(private db: AngularFireDatabase) {
    this.invoiceList = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Invoice> {
    return this.invoiceList;
  }

  create(packing: Invoice): any {
    return this.invoiceList.push(packing);
  }

  update(key: string, value: any): Promise<void> {
    return this.invoiceList.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.invoiceList.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.invoiceList.remove();
  }
}
