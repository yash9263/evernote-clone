import React, { useState } from "react";
import "./CreateNote.css";

export default function CreateNote({
  title,
  setTitle,
  addingNote,
  setAddingNote,
  newNote,
}) {
  const newNoteBtnClick = () => {
    setTitle(title);
    setAddingNote(!addingNote);
  };

  const updateTitle = (text) => {
    setTitle(text);
  };

  const createNote = () => {
    newNote(title);
    setTitle("");
    setAddingNote(false);
  };

  return (
    <div className="createnote-container">
      <button onClick={newNoteBtnClick}>
        {addingNote ? "Cancel" : "New Note"}
      </button>
      {addingNote && (
        <div>
          <input
            type="text"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
            onKeyUp={(e) => updateTitle(e.target.value)}
            value={title}
          />
          <button onClick={title.length > 0 ? createNote : null}>
            Create Note
          </button>
        </div>
      )}
    </div>
  );
}
