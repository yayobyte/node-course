const http = require('node:http')

const desiredPort = process.env.PORT ?? 3000

const dittoJSON = require('./ditto.json')

const processRequest = (req, res) => {
    const { method, url } = req

    switch (method) {
        case 'GET':
            switch (url) {
                case '/pokemon/ditto':
                    res.setHeader('Content-Type', 'application/json; charset=utf8')
                    return res.end(JSON.stringify(dittoJSON))
                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/html; charset=utf8')
                    return res.end('<h1>Not found</h1>')
            }
        case 'POST':
            let body = ''
            switch (url) {
                case '/pokemon/ditto':
                    req.on('data', (chunk) => {
                        body += chunk.toString()
                    })
                    req.on('end', () => {
                        const data = JSON.parse(body)
                        res.writeHead(201, { 'Content-Type': 'application/json; charset=utf8'})
                        res.end(JSON.stringify(data))
                    })
                    return
                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/html; charset=utf8')
                    return res.end('<h1>Not found</h1>')

            }

    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`listening on port http://localhost:${desiredPort}`)
})
