'use strict'

const admin = require('firebase-admin');
const axios = require('axios')
const express = require('express')

const router = express.Router()
const BACKEND_URL = process.env.BACKEND_URL

router.get('/', (req, res) => {
  const params = {
    is_private: false,
    sort_by: 'rating',
    limit: 10
  }
  return axios.get(BACKEND_URL + '/v1/experiences', {params: params})
    .then(axiosRes => axiosRes.data)
    .then(experience => res.json(experience))
})

router.get('/:id/comments', (req, res) => {
  return axios.get(BACKEND_URL + '/v1/experiences/' + req.params.id + '/comments')
    .then(axiosRes => axiosRes.data)
    .then(comments => {
      const promises = []
      const auth = admin.auth()

      comments.forEach(comment => {
        promises.push(auth.getUser(comment.owner)
          .then(userRecord => {
            comment.owner = userRecord.displayName || 'guest'
          }))
      })

      Promise.all(promises)
        .then(() => {
          res.json(comments)
        })
    })
})

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
      req.body.owner = userData.uid
      return axios.post(BACKEND_URL + '/v1/experiences', req.body)
        .then(axiosRes => axiosRes.data)
        .then(experience => res.json(experience))
    })
    .catch(console.log)
})

router.post('/:id/comments', (req, res) => {
  // TODO: Move to middleware, check exists
  admin.auth().verifyIdToken(req.header('Authorization').split(' ')[1])
    .then(userData => {
      req.body.owner = userData.uid
      return axios.post(BACKEND_URL + '/v1/experiences/' + req.params.id + '/comments', req.body)
        .then(axiosRes => axiosRes.data)
        .then(comment => res.json(comment))
    })
    .catch(console.log)
})

router.put('/:id', (req, res) => {
  // TODO: Move to middleware, check exists
  admin.auth().verifyIdToken(req.header('Authorization').split(' ')[1])
    .then(userData => {
      req.body.owner = userData.uid
      return axios.put(BACKEND_URL + '/v1/experiences/' + req.params.id, req.body)
        .then(axiosRes => axiosRes.data)
        .then(experience => res.json(experience))
    })
    .catch(console.log)
})

module.exports = router
