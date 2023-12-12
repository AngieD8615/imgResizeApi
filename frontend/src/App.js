import React, { useState } from 'react';
import './App.css';

function App() {
  const imageUri = 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8='
  const encodedWebUri = encodeURIComponent(imageUri) 
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
        <section>
          <form onSubmit={(e) => handleSubmit(e)}>
            <fieldset>
              <label for="width">Width: <input id="width" type="number" required min="25" max="400" value={formWidth} onChange={(e) => {setFormWidth(e.target.value)}}/>
              </label>
              <label for="height">Height: <input id="height" type="number" required min="25" max="400" value={formHeight} onChange={(e) => {setFormHeight(e.target.value)}}/>
              </label>
              <input type="submit" value="Resize" />
            </fieldset>
          </form>
        </section>
        <section>
          <h2>Full Image Web</h2>
          <img src={imageUri} alt="Original from web" />
          <h2>Resized Image from Server</h2>
          <img src={`http://localhost:3001/transformImage/${encodedWebUri}/width/${resizeWidth}/height/${resizeHeight}`} alt="Resized from server"/>
        </section>
      </body>
    </div>
  );
}

export default App;
