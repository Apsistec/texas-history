import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getMarkers(): Observable<any[]> {
    const markersCollection = collection(this.firestore, 'markers');
    return collectionData(markersCollection);
  }

  addMarker(marker: any): Promise<any> {
    const markersCollection = collection(this.firestore, 'markers');
    return addDoc(markersCollection, marker);
  }
}