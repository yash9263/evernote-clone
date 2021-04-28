import React, { useState } from "react";
import "./AllNotes.css";
export default function AllNotes({ notes, setSelectedNote }) {
  console.log(notes);
  return (
    <div className="notes-container">
      {notes.map((note, index) => {
        return (
          <div
            key={index}
            className="note"
            onClick={() =>
              setSelectedNote({
                id: note.id,
                index,
                title: note.title,
                body: note.body,
              })
            }
          >
            <div className="note-title">Title: {note.title}</div>
            <div className="note-body">
              Body: {note.body.substring(0, 10) + "..."}
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
