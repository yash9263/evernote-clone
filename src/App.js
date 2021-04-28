import react, { useEffect, useState } from "react";
import firebase from "firebase/app";
import { db } from "./firebase-config";
import "react-quill/dist/quill.snow.css";
import "./App.css";
import GetNotes from "./components/hooks/GetNotes";
import ReactQuillComp from "./components/ReactQuillComp";
import SiderBarComp from "./components/SiderBarComp";

function App() {
  const [selectedNote, setSelectedNote] = useState(null);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [notes, setNotes] = useState(GetNotes("notes").notes);
  // setNotes();
  // const { notes } = GetNotes("notes");
  useEffect(() => {}, []);

  const selectNote = (note, index) => {
    setSelectedNoteIndex(index);
    setSelectedNote(note);
  };

  const noteUpdate = (id, noteObj) => {
    if (id) {
      db.collection("notes").doc(id).update({
        title: noteObj.title,
        body: noteObj.body,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  const newNote = async (title) => {
    const note = {
      title: title,
      body: "",
    };

    const docRef = await db.collection("notes").add({
      title: note.title,
      body: note.body,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    const newId = docRef.id;
    await setNotes([...notes, note]);
    const newNoteIndex = notes.indexOf(
      notes.filter((_note) => _note.id === newId)[0]
    );
    setSelectedNote(notes[newNoteIndex]);
    setSelectedNoteIndex(newNoteIndex);
  };

  const deleteNote = async (note) => {
    const noteIndex = notes.indexOf(note);
    await setNotes(notes.filter((_note) => _note !== note));
    if (selectedNoteIndex === noteIndex) {
      setSelectedNoteIndex(null);
      selectNote(null);
    } else {
      if (notes.length > 1) {
        selectNote(notes[selectedNoteIndex - 1], selectedNoteIndex - 1);
      } else {
        setSelectedNoteIndex(null);
        setSelectedNote(null);
      }
    }

    db.collection("notes").doc(note.id).delete();
  };

  // console.log(notes);

  return (
    <div className="app-container">
      <SiderBarComp
        selectedNoteIndex={selectedNoteIndex}
        notes={notes}
        deleteNote={deleteNote}
        selectNote={selectNote}
        newNote={newNote}
      />
      {selectedNote ? (
        <ReactQuillComp
          selectedNote={selectedNote}
          selectedNoteIndex={selectedNoteIndex}
          notes={notes}
          noteUpdate={noteUpdate}
        />
      ) : null}
    </div>
  );
}

export default App;
