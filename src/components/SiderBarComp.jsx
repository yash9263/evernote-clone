import react from "react";
import CreateNote from "./CreateNote";
import GetNotes from "./hooks/GetNotes";
import "./SiderBarComp.css";

export default function SiderBarComp() {
  const { notes } = GetNotes("notes");
  console.log(notes);

  return (
    <div className="sidebar-container">
      <CreateNote />
    </div>
  );
}
