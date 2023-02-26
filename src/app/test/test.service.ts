import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private firestore: AngularFirestore) { }

  async getPackings(): Promise<any[]> {
    const snapshot = await this.firestore.collection('packings').get().toPromise();
    return snapshot.docs.map(doc => doc.data());
  }

  async getOracles(): Promise<any[]> {
    const snapshot = await this.firestore.collection('oracle').get().toPromise();
    return snapshot.docs.map(doc => doc.data());
  }
}
