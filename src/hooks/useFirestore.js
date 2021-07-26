import { useState, useEffect } from 'react';
import { firestore } from '../firebase';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = firestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  return { docs };
}

export default useFirestore;