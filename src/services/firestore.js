/* eslint-disable no-console */
import db from "@/configs/Firebase";
import {
  collection,
  addDoc,
  getDoc,
  doc,
  getDocs,
  query,
  setDoc,
  deleteField,
  onSnapshot,
} from "firebase/firestore";

class BaseFirestore {}

class FirestoreService {
  // miss case where
  async getAll(collectionParam) {
    const cl = collection(db, collectionParam);
    const q = query(cl);
    const querySnap = await getDocs(q);

    return querySnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  async get(collectionParam, documentId) {
    const docSnap = await getDoc(doc(db, collectionParam, documentId));

    let response = {};

    if (docSnap.exists()) {
      response = { id: docSnap.id, ...docSnap.data() };
    }

    return response;
  }

  async create(collectionParam, data) {
    const colRef = collection(db, collectionParam);

    const docRef = await addDoc(colRef, data);

    return docRef.id;
  }

  async set(collectionParam, documentId, data) {
    return await setDoc(doc(db, collectionParam, documentId), data);
  }

  async setMerge(collectionParam, documentId, data) {
    const d = doc(db, collectionParam, documentId);

    return await setDoc(d, data, { merge: true });
  }

  async update(collectionParam, documentId, data) {
    return await updateDoc(doc(db, collectionParam, documentId), data);
  }

  async delete(collectionParam, documentId) {
    await deleteDoc(doc(db, collectionParam, documentId));
  }

  async deleteField(collectionParam, documentId, fields) {
    const fieldDelete = {};
    fields.forEach((field) => {
      fieldDelete[field] = deleteField();
    });

    return await updateDoc(doc(db, collectionParam, documentId), fieldDelete);
  }

  snapshotDocument(collectionParam, documentId, callback) {
    onSnapshot(doc(db, collectionParam, documentId), (snap) => {
      const response = {
        id: snap.id,
        ...snap.data(),
      };
      callback(response);
    });
  }
}

export default new FirestoreService();
