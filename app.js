require("dotenv").config()
const express = require("express")
const app = express()

const name = process.env.HELLO_NAME
app.get("/", function (req, res) {
  res.send(`Hello World! Environnement ${name}`)
})

const port = process.env.PORT
app.listen(port, function () {
  console.log(`ToDo API listening on port ${port}`)
})
