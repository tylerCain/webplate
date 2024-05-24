import express from 'express'

const app = express()
  .use(express.json())
  //.use('/api', routes)

app.listen(4001, function () {
  console.log('Server listening on port 4001')
})