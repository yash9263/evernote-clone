import React, { useState } from "react";
import "./CreateNote.css";
import firebase from "firebase/app";
import { db } from "../firebase-config";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [id, setId] = useState(null);
  const [showNote, setShowNote] = useState(false);

  const changeHandler = (event) => {
    setTitle(event.target.value);
  };

  const addNewNote = () => {
    db.collection("notes")
      .add({
        title: title,
        body: "",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((docRef) => {
        console.log("Document written with Id: ", docRef.id);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(id);
  };
  return (
    <div className="createnote-container">
      <button onClick={() => setShowNote(!showNote)}>New Note</button>
      {showNote && (
        <div>
          <input
            placeholder="Enter Title"
            onChange={changeHandler}
            value={title}
          />
          <button onClick={title.length > 0 ? addNewNote : null}>
            Create Note
          </button>
        </div>
      )}
    </div>
  );
}
