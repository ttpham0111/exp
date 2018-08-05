'use strict'

const admin = require('firebase-admin');
const axios = require('axios')
const express = require('express')

const router = express.Router()
const BACKEND_URL = process.env.BACKEND_URL

router.get('/mine', (req, res) => {
  // TODO: Move to middleware, check exists
  admin.auth().verifyIdToken(req.header('Authorization').split(' ')[1])
    .then(userData => {
      return axios.get(BACKEND_URL + '/v1/experiences?owner=' + userData.uid)
        .then(axiosRes => axiosRes.data)
        .then(experience => res.json(experience))
    })
    .catch(console.log)
})

router.post('/', (req, res) => {
  // TODO: Move to middleware, check exists
  admin.auth().verifyIdToken(req.header('Authorization').split(' ')[1])
    .then(userData => {
      const experience = req.body
      experience.owner = userData.uid

      return axios.post(BACKEND_URL + '/v1/experiences', experience)
        .then(axiosRes => axiosRes.data)
        .then(experience => res.json(experience))
    })
    .catch(console.log)
})

module.exports = router
