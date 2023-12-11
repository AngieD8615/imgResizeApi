import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [image, setImage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/transformedImage', {
      responseType: "arraybuffer"
    })
    .then((res) => {
      const base64 = btoa(
        new Uint8Array(res.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      )
      setImage(base64)
    })
    .then(() => {
      setIsLoading(false)});
    }, [])

  

  return (
    <div className="App">
      <header className="App-header">
        <p>Image from Server</p>
        {isLoading ? `Loading` : <img src={`data:image/jpeg;charset=utf-8;base64,${image}`} alt="Angie and Baby from server"/>}
      </header>
    </div>
  );
}

export default App;
