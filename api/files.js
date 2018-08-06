'use strict'

const admin = require('firebase-admin')
const axios = require('axios')
const express = require('express')
const mkdirp = require('mkdirp')
const path = require('path')
const uuid = require('uuid/v4')
const fs = require('fs')

const router = express.Router()

const staticDir = path.join(__dirname, '..', 'static', 'experiences')
const staticUrl = '/static/experiences'

function ls(dirname) {
  fs.readdir(dirname, (err, files) => {
    if (err) console.log(err)
    else {
      files.forEach(file => {
        console.log(dirname, file)
      })
    }
  })
}

router.post('/', (req, res) => {
  ls(staticDir)
  ls(path.join(staticDir, 'img'))
  ls('./static')

  // TODO: Move to middleware, check exists, error handle
  admin.auth().verifyIdToken(req.header('Authorization').split(' ')[1])
    .then(userData => {
      const ext = req.files.image.mimetype.split('/')[1]
      const filename = uuid()+'.'+ext

      const destDir = path.join(staticDir, 'img', userData.uid)
      const dest = path.join(destDir, filename)
      

      mkdirp.sync(destDir)
      return req.files.image.mv(dest)
        .then(() => {
          // TODO: Won't display outside of server, use non-local storage
          const url = [staticUrl, 'img', userData.uid, filename].join('/')
          res.status(201).send(url)
        })
    })
    .catch(console.log)
})

module.exports = router
