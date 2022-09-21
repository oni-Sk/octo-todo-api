require("dotenv").config()
const express = require("express")
const { Sequelize } = require("sequelize")
const app = express()
app.use(express.json())

const sequelize = new Sequelize(process.env.DATABASE_URL)

app.get("/", function (req, res) {
  res.send(`Hello World! Environnement de ${process.env.ENV}`)
})

const port = process.env.PORT
app.listen(port, function () {
  console.log(`ToDo API listening on port ${port}`)
})
