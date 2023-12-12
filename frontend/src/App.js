import React, { useState } from 'react';
import './App.css';
import ResizeForm from './ResizeForm';
import DisplayImages from './DisplayImages';

function App() {
  const imageUri = 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8='
  const [formWidth, setFormWidth] = useState(100)
  const [formHeight, setFormHeight] = useState(100)

  const [resizeWidth, setResizeWidth] = useState(100)
  const [resizeHeight, setResizeHeight] = useState(100)

  const handleSubmit = (e) => {
    e.preventDefault()
    setResizeWidth(formWidth)
    setResizeHeight(formHeight)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Resize Image</h1>
      </header>
      <body>      
        <ResizeForm formWidth={formWidth} setFormWidth={setFormWidth} formHeight={formHeight} setFormHeight={setFormHeight} handleSubmit={handleSubmit}/>
        <DisplayImages imageUri={imageUri} resizeWidth={resizeWidth} resizeHeight={resizeHeight} />
      </body>
    </div>
  );
}

export default App;
