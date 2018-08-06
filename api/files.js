'use strict'

const admin = require('firebase-admin')
const axios = require('axios')
const express = require('express')
const mkdirp = require('mkdirp')
const path = require('path')
const uuid = require('uuid/v4')

const router = express.Router()

const staticDir = path.join(__dirname, '..', 'static', 'experiences')
const staticUrl = '/static/experiences'

router.post('/', (req, res) => {
  // TODO: Move to middleware, check exists, error handle
  admin.auth().verifyIdToken(req.header('Authorization').split(' ')[1])
    .then(userData => {
      const ext = req.files.image.mimetype.split('/')[1]
      const filename = uuid()+'.'+ext

      const destDir = path.join(staticDir, 'img', userData.uid)
      const dest = path.join(destDir, filename)

      mkdirp.sync(destDir, {
        mode: '0755'
      })
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
