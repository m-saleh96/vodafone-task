import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  DocumentData,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private firestore = getFirestore(initializeApp(environment.firebaseConfig));

  constructor() {}

  async saveArrayToFirebase(arrayData: any[]) {
    const collectionRef = collection(this.firestore, 'favorite');

    for (const item of arrayData) {
      await addDoc(collectionRef, item);
    }
  }

  async getFavorites() {
    const collectionRef = collection(this.firestore, 'favorite');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    const favorites: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      favorites.push({ id: doc.id, ...doc.data() });
    });

    return favorites;
  }

  async removeFromFavorites(itemId: number) {
    const collectionRef = collection(this.firestore, 'favorite');
    const q = query(collectionRef, where('id', '==', itemId));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (document) => {
      await deleteDoc(doc(collectionRef, document.id));
    });
  }
}
