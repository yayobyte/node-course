const express = require('express')
const app = express()

const dittoJSON = require("./ditto.json");

const PORT = process.env.PORT ?? 3000

app.disable('x-powered-by')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

app.get('/pokemon/ditto', (req, res) => {
    return res.json(dittoJSON)
})

app.post('/pokemon/ditto', (req, res) => {
    res.status(201).send(req.body)
})

app.use((req, res) => {
    res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`)
})