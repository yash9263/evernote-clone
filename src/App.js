import react, {useState} from 'react';
import logo from './logo.svg';
import 'react-quill/dist/quill.snow.css';
import './App.css';
import GetNotes from './components/hooks/GetNotes';
import ReactQuillComp from './components/ReactQuillComp';
import SiderBarComp from './components/SiderBarComp';

function App() {
  const [selectedNote, setSelectedNote] = useState({});
  console.log(selectedNote);
  return (
    <div className="app-container">
      <SiderBarComp setSelectedNote={setSelectedNote} />
      <ReactQuillComp selectedNote={selectedNote}/>
    </div>
  );
}

export default App;
