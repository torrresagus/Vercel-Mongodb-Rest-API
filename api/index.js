const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const Meals = require('./routes/Meals')
const Orders = require('./routes/Orders')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@your_cluster.mongodb.net/your_database_name?retryWrites=true&w=majority`;
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })

app.use("/api/Meals", Meals)
app.use("/api/Orders", Orders)

module.exports = app