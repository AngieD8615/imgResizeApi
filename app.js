const express = require('express')
var cors = require('cors')
const sharp = require('sharp');
const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

app.get('/transformImage/:imageFile/width/:width/height/:height', async (req, res) => {
  const { imageFile, width, height } = req.params;
  // const imageUri = 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
  

  sharp(imageFile).resize(parseInt(width), parseInt(height)).withMetadata().toBuffer()
    .then(data => {
        res.type('jpg').send(data)
      }) 
  res.end()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});