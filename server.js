'use strict'

const express = require('express');
const history = require('connect-history-api-fallback')
const path = require('path')

const experiencesApi = require('./api/experiences')

const app = express();

// Middlewares
app.use('/api/experiences', experiencesApi)

app.use(history());
app.use(express.static(path.join(__dirname, 'dist')));

var port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Server started on port ' + port);
});
