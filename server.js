'use strict'

const admin = require('firebase-admin')
const express = require('express')
const fileUpload = require('express-fileupload')
const history = require('connect-history-api-fallback')
const path = require('path')

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_CONFIG)),
  databaseURL: 'https://exp-el.firebaseio.com'
})

const app = express()
app.use(express.json())
app.use(fileUpload())

// Middlewares
app.use('/api/experiences', require('./api/experiences'))
app.use('/api/activities', require('./api/activities'))
app.use('/api/upload', require('./api/files'))

app.use(history());
app.use(express.static(path.join(__dirname, 'dist')))

var port = process.env.PORT || 8080
app.listen(port, () => {
  console.log('Server started on port ' + port)

  const http = require('http');
  setInterval(() => {
      http.get('https://exp-erience.herokuapp.com')
  }, 1200000)  // 20 minutes
})
