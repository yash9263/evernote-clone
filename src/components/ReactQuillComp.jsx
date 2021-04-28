import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import QuillTitle from "./QuillTitle";
import "./ReactQuillComp.css";
import debounce from "../helper";

export default function ReactQuillComp({ selectedNote, noteUpdate }) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    setText(selectedNote.body);
    setTitle(selectedNote.title);
    setId(selectedNote.id);
  }, [selectedNote]);

  const updateBody = async (value) => {
    await setText(value);
    update();
  };

  const updateTitle = async (txt) => {
    await setTitle(txt);
    update();
  };

  const update = debounce(() => {
    noteUpdate(id, { title: title, body: text });
  }, 1500);

  return (
    <div
      className="quillcomp-container"
      style={{ height: "100%", boxSizing: "border-box" }}
    >
      <QuillTitle title={title} updateTitle={updateTitle} />
      <ReactQuill value={text} onChange={updateBody} theme="snow" />
    </div>
  );
}
