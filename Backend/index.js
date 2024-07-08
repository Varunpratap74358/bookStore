// const express = require('express')
// const dotenv = require("dotenv")
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())

dotenv.config()
const port = process.env.PORT || 3001
const URI = process.env.mongoDBURI

// connect to mongo db

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log('Connect to mongo db')
} catch (error) {
  console.log('Error')
}

// Defing route

app.use('/book', bookRoute)
app.use('/user', userRoute)

app.get('/', (req, res) => {
  res.send('Project started now')
})

app.listen(port)
