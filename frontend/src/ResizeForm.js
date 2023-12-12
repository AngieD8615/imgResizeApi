import React from "react";

export default function ResizeForm ({ formWidth, setFormWidth, 
                                      formHeight, setFormHeight, 
                                      handleSubmit }) {

  return (
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
  )
}