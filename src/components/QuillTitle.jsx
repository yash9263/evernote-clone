import { Update } from "@material-ui/icons";
import react, { useEffect, useState } from "react";
import "./QuillTitle.css";

export default function QuillTitle({ noteTitle, title, setTitle, update }) {
  // const [title, setTitle] = useState("");
  const changeHandler = (event) => {
    setTitle(event.target.value);
    console.log(title);
    update();
  };
  useEffect(() => {
    setTitle(noteTitle);
  }, [noteTitle, setTitle]);
  return (
    <div className="title-container">
      <input
        className="title-input"
        onChange={changeHandler}
        placeholder="Title"
        value={title ? title : ""}
      />
    </div>
  );
}
