const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log('request received')
    res.end('Hola mundo')
})

server.listen(process.env.PORT ?? 3000, () => {
    console.log('server listening on port', server.address().port)
})
