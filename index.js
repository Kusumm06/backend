const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req,res) => {
    res.send("Enter your login credentials")
})

app.get('/signup', (req,res) => {
  res.send("<h1>Enter your complete credentials</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})