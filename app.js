const express = require('express')
var cors = require('cors')
const sharp = require('sharp');
const app = express()
const port = 3001

app.get('/transformedImage', cors(), async (req, res) => {
// The API will receive which image to resize and the desired resulting size. 
  await sharp('./ServerPicture.jpg').resize(100, 100).withMetadata().toFile('./output.jpg', (err) => {
    console.error(err)
  })

  const fileName = __dirname + '/output.jpg'
  console.log(fileName)
  res.sendFile(fileName, function (err) {
    if (err) {
      console.error(err)
    } else {
      console.log('Sent:', fileName)
    }
  })

})

app.get('/', cors(), (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})