'use strict'

const express = require('express')
const jsf = require('json-schema-faker')
const moment = require('moment')

const router = express.Router()

jsf.extend('faker', () => {
  const faker = require('faker')
  return faker
})

const experienceSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      faker: 'random.uuid'
    },
    owner: {
      type: 'string',
      faker: 'random.uuid'
    },
    name: {
      type: 'string',
      faker: 'lorem.words'
    },
    image_url: {
      type: 'string',
      faker: 'image.city'
    },
    rating: {
      type: 'number',
      minimum: 0,
      maximum: 5,
      multipleOf: 0.5
    },
    num_events: {
      type: 'integer',
      minimum: 0,
      maximum: 50
    },
    tags: {
      type: 'array',
      minItems: 0,
      maxItems: 25,
      uniqueItems: true,
      items: {
        type: 'string',
        faker: 'company.bsBuzz'
      }
    },
    num_comments: {
      type: 'integer',
      minimum: 0,
      maximum: 100000
    },
    num_collaborators: {
      type: 'integer',
      minimum: 0,
      maximum: 10
    },
    starts_at: {
      type: 'Date',
      faker: {
        'date.between': [
          moment().subtract(2, 'months').toDate(),
          moment().add(7, 'months').toDate()
        ]
      }
    }
  },
  required: ['id', 'name', 'rating', 'num_events', 'tags', 'num_comments', 'num_collaborators', 'starts_at']
}

router.get('/', (req, res) => {
  const n = 25

  jsf.resolve({
    type: 'array',
    minItems: n,
    maxItems: n,
    items: experienceSchema
  })
    .then(experiences => {
      res.json(experiences)
    })
})

router.get('/mine', (req, res) => {
  const n = 5

  jsf.resolve({
    type: 'array',
    minItems: n,
    maxItems: n,
    items: experienceSchema
  })
    .then(experiences => {
      res.json(experiences)
    })
})

router.post('/', (req, res) => {
  jsf.resolve(experienceSchema)
    .then(experience => {
      res.json(experience)
    })
})

module.exports = router
