import react, { useState } from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";
import GetNotes from "./hooks/GetNotes";
import "./SiderBarComp.css";

export default function SiderBarComp({
  selectedNoteIndex,
  // notes,
  deleteNote,
  selectNote,
  newNote,
}) {
  const [addingNote, setAddingNote] = useState(false);
  const [title, setTitle] = useState("");
  const { notes } = GetNotes("notes");

  return (
    <div className="sidebar-container">
      <CreateNote
        title={title}
        setTitle={setTitle}
        addingNote={addingNote}
        setAddingNote={setAddingNote}
        newNote={newNote}
      />
      <ul>
        {notes.map((note, index) => {
          return (
            <div key={index}>
              <Note
                note={note}
                index={index}
                selectedNoteIndex={selectedNoteIndex}
                selectNote={selectNote}
                deleteNote={deleteNote}
              />
              <hr />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
