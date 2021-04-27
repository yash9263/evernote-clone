import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app'

const GetNotes = (collection) => {
    const [notes, setNotes] = useState([]);

    useEffect (() => {
        const unsub = firebase.firestore().collection(collection).onSnapshot((snap) => {
            let documents = [];
            snap.forEach((doc) => {
                documents.push({...doc.data(), id: doc.id});
            })
            setNotes(documents);
        })

        return () => unsub();
    }, [collection])

    return {notes};
}

export default GetNotes;