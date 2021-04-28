import react from "react";
import AllNotes from "./AllNotes";
import CreateNote from "./CreateNote";
import GetNotes from "./hooks/GetNotes";
import "./SiderBarComp.css";

export default function SiderBarComp({ setSelectedNote }) {
  const { notes } = GetNotes("notes");
  // console.log(notes);

  return (
    <div className="sidebar-container">
      <CreateNote />
      <AllNotes notes={notes} setSelectedNote={setSelectedNote} />
    </div>
  );
}
