import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import QuillTitle from "./QuillTitle";
import "./ReactQuillComp.css";
import debounce from "../helper";
import firebase from "firebase/app";
import { db } from "../firebase-config";

export default function ReactQuillComp({ selectedNote }) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const handleChange = (value) => {
    setText(value);
    console.log(text);
    update();
  };

  useEffect(() => {
    setText(selectedNote.body);
  }, [selectedNote]);

  const update = debounce(() => updateFirestore(selectedNote.id, title, text));

  const updateFirestore = (id, title, body) => {
    db.collection("notes").doc(id).update({
      title: title,
      body: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <div
      className="quillcomp-container"
      style={{ height: "100%", boxSizing: "border-box" }}
    >
      <QuillTitle
        noteTitle={selectedNote.title}
        title={title}
        setTitle={setTitle}
        update={update}
      />
      <ReactQuill
        value={text ? text : ""}
        onChange={handleChange}
        theme="snow"
      />
    </div>
  );
}
