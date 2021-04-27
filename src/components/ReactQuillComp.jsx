import React, { useState } from "react";
import ReactQuill from "react-quill";
import QuillTitle from "./QuillTitle";
import "./ReactQuillComp.css";

export default function ReactQuillComp() {
  const [text, setText] = useState("");
  const handleChange = (value) => {
    setText(value);
    console.log(text);
  };
  return (
    <div
      className="quillcomp-container"
      style={{ height: "100%", boxSizing: "border-box" }}
    >
      <QuillTitle />
      <ReactQuill value={text} onChange={handleChange} theme="snow" />
    </div>
  );
}
