import express from 'express'
import funcUpdate from "./eventer.js"
 const app = express()
const port = 3000
app.get('/note', (req, res) => {
  res.send(funcUpdate()) 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

