import React from 'react';
import './App.css';

function App() {
  const imageUri = 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
  const encodedWebUri = encodeURIComponent(imageUri) 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Resize Image</h1>
      </header>
      <body>      
        <section>
          <p>Full Image Web</p>
          <img src={imageUri} alt="Original from web" />
          <p>Resized Image from Server</p>
          <img src={`http://localhost:3001/transformImage/${encodedWebUri}/width/150/height/250`} alt="Resized from server"/>
        </section>
      </body>
    </div>
  );
}

export default App;
