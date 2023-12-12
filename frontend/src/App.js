import React from 'react';
import './App.css';

function App() {

const imageUri = 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'

const encodedUri = encodeURIComponent(imageUri) 

  return (
    <div className="App">
      <header className="App-header">
        <p>Full Image</p>
        <img src={imageUri} alt="Original from web" />
        <p>Image from Server</p>
        <img src={`http://localhost:3001/transformImage/${encodedUri}/width/250/height/250`} alt="Resized from server"/>
      </header>
    </div>
  );
}

export default App;
