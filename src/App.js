import react, {useState} from 'react';
import logo from './logo.svg';
import 'react-quill/dist/quill.snow.css';
import './App.css';
import GetNotes from './components/hooks/GetNotes';
import ReactQuillComp from './components/ReactQuillComp';
import SiderBarComp from './components/SiderBarComp';

function App() {
  
  return (
    <div className="app-container">
      <SiderBarComp />
      <ReactQuillComp />
    </div>
  );
}

export default App;
