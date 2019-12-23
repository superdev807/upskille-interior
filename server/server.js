const express = require('express')
const routeFuntions = require('./upload')
const cors = require('cors')

const server = express()

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

server.use(cors(corsOptions))
server.use(express.static('upload'))

server.post('/upload', routeFuntions.upload)

server.get('/img/:query', routeFuntions.imgSearch)

server.listen(8000, () => {
  console.log('Server started!')
})