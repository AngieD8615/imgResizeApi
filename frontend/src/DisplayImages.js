import React from "react";


export default function DisplayImages ({imageUri, resizeWidth, resizeHeight}) {
  const encodedWebUri = encodeURIComponent(imageUri) 

  return (
    <section>
          <h2>Full Image Web</h2>
          <img src={imageUri} alt="Original from web" />
          <h2>Resized Image from Server</h2>
          <img src={`http://localhost:3001/transformImage/${encodedWebUri}/width/${resizeWidth}/height/${resizeHeight}`} alt="Resized from server"/>
        </section>
  )
}