import React,{useState} from 'react';
import Title from "./components/Title"

import './App.css';
import UploadForm from './components/UploadForm';
import Imagegrid from './components/Imagegrid';
import Modal from './components/Modal'

function App() {
  const [selected,setSelected] = useState(null)
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <Imagegrid setSelected={setSelected}/>
      { selected &&  <Modal selected  = {selected} setSelected={setSelected}/>}
     
      
    </div>
  );
}

export default App;
