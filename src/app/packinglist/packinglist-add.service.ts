import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Packinglist } from '../model/packinglist.model';

@Injectable({
  providedIn: 'root'
})
export class PackinglistAddService {

  private dbPath = '/admin';

  adminRef: AngularFireList<Packinglist>;
  
  constructor(private db: AngularFireDatabase) { 
    this.adminRef = db.list(this.dbPath);
  }

  getAllPackingLists(): AngularFireList<Packinglist> {
    return this.adminRef;
  }
  create(packingList: Packinglist): any {
    return this.adminRef.push(packingList);
  }

  update(key: string, value: any): Promise<void> {
    return this.adminRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.adminRef.remove(key);
  }
}
