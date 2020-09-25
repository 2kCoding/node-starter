import express from 'express'

const app = express()

const SERVER_PORT = 8080

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

app.listen(SERVER_PORT)
