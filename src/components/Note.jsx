import React, { useState } from "react";
import "./Note.css";
import { removeHTML } from "../helper";

export default function Note({
  note,
  index,
  selectedNoteIndex,
  selectNote,
  deleteNote,
}) {
  const selectThisNote = (note, index) => {
    selectNote(note, index);
    // console.log(note, index);
  };
  const deleteThisNote = (note) => {
    if (window.confirm(`Delete note: ${note.title}`)) {
      deleteNote(note);
    }
  };

  return (
    <li
      key={index}
      className="note"
      selected={selectedNoteIndex === index}
      onClick={() => selectThisNote(note, index)}
    >
      <div className="note-title">{note.title}</div>
      <div className="note-body">
        {removeHTML(note.body.substring(0, 20)) + "..."}
      </div>
      <button className="delete-btn" onClick={() => deleteThisNote(note)}>
        delete
      </button>
    </li>
  );
}
