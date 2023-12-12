const express = require('express')
const axios = require('axios');
var cors = require('cors')
const sharp = require('sharp');
const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

app.get('/transformImage/:imageFile/width/:width/height/:height', async (req, res) => {
  const { imageFile, width, height } = req.params;

  let img = await axios.get(imageFile, {
    responseType: 'arraybuffer'
  })
  
  sharp(img.data).resize(parseInt(width), parseInt(height)).withMetadata().toBuffer()
    .then(data => {
        res.send(data)
      }) 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});