import { Update } from "@material-ui/icons";
import react, { useEffect, useState } from "react";
import "./QuillTitle.css";

export default function QuillTitle({ title, updateTitle }) {
  return (
    <div className="title-container">
      <input
        className="title-input"
        placeholder="Title"
        value={title ? title : ""}
        onChange={(e) => updateTitle(e.target.value)}
      />
    </div>
  );
}
