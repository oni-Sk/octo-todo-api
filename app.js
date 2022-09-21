require("dotenv").config()
const express = require("express")
const { Sequelize } = require("sequelize")
const app = express()
app.use(express.json())

const sequelize = new Sequelize(process.env.DATABASE_URL)

app.get("/", function (req, res) {
  res.send(`Hello World! Environnement de ${process.env.ENV}`)
})

app.get("/todos", async function (req, res) {
  const todos = await sequelize.query("SELECT * FROM todos")
  res.send(todos[0])
})

app.post("/todos", async function(req,res) {
  await sequelize.query(`INSERT INTO todos(description, date_echeance) VALUES(?, ?) RETURNING id`, {
    replacements: [req.body.description, req.body.date]
  })
  res.send("Ok")
})

const port = process.env.PORT
app.listen(port, function () {
  console.log(`ToDo API listening on port ${port}`)
})
