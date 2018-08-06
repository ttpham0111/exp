'use strict'

const axios = require('axios')
const express = require('express')

const router = express.Router()
const BACKEND_URL = process.env.BACKEND_URL

router.get('/', (req, res) => {
  return axios.get(BACKEND_URL + '/v1/activities', {params: req.query})
    .then(axiosRes => axiosRes.data)
    .then(activities => res.json(activities))
    .catch(err => {
      console.log(err.response.data)
    })
})

module.exports = router
