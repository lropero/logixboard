const createError = require('http-errors')
const express = require('express')
const gradient = require('gradient-string')
const morgan = require('morgan')

const routes = require('./routes')
const { port } = require('./config')

const api = express()
if (api.get('env') === 'development') {
  api.use(morgan('dev'))
}
api.use('/', routes)
api.use((req, res) => res.status(405).json(createError(405)))
api.listen(port)
console.log(gradient.summer(`Logixboard API listening on port ${port}`))
