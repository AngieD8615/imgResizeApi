import React, { useState } from 'react';
import './App.css';

function App() {
  const imageUri = 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8='
  const encodedWebUri = encodeURIComponent(imageUri) 
  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)

  const handleClick = (e) => {
    e.preventDefault()
    // setDimensions({width: , height: })
    console.log(e.target.name)
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Resize Image</h1>
      </header>
      <body>      
        <section>
          <form>
            <fieldset>
              <label for="width">Width: <input id="width" type="number" required min="25" max="400" value={width} onChange={(e) => {setWidth(e.target.value)}}/>
              </label>
              <label for="height">Height: <input id="height" type="number" required min="25" max="400" value={height} onChange={(e) => {setHeight(e.target.value)}}/>
              </label>
              <input type="submit" value="Resize" onClick={(e) => handleClick(e)}/>
            </fieldset>
          </form>
        </section>
        <section>
          <p>Full Image Web</p>
          <img src={imageUri} alt="Original from web" />
          <p>Resized Image from Server</p>
          <img src={`http://localhost:3001/transformImage/${encodedWebUri}/width/${width}/height/${height}`} alt="Resized from server"/>
        </section>
      </body>
    </div>
  );
}

export default App;
