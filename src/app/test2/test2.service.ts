import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Test2Service {

  constructor(private firestore: AngularFirestore) { }

  getPackings(): Observable<any[]> {
    const packingsCollection: AngularFirestoreCollection<any> = this.firestore.collection('packings');
    return packingsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data()))
    );
  }

  getOracles(): Observable<any[]> {
    const oraclesCollection: AngularFirestoreCollection<any> = this.firestore.collection('oracle');
    return oraclesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data()))
    );
  }
}
