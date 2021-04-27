import react, { useState } from "react";
import "./QuillTitle.css";

export default function QuillTitle() {
  const [title, setTitle] = useState("");
  const changeHandler = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div className="title-container">
      <input
        className="title-input"
        onChange={changeHandler}
        placeholder="Title"
        value={title}
      />
    </div>
  );
}
