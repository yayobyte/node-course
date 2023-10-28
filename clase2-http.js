const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req,res) => {
    console.log('request received ', req.url)
    res.setHeader('Content-Type', 'text/html; charset=utf8')
    if (req.url === '/') {
        res.statusCode = 200
        res.end('<h1>Bienvenido a la pagina home</h1>')
    } else if(req.url === '/contacto') {
        res.statusCode = 200
        res.end('<h1>Contacto</h1>')
    } else if(req.url === '/imagen.png') {
        fs.readFile('./imagen.png', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end('<h1>Internal Error Parce</h1>')
            } else {
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }
        })
    } else {
        res.statusCode = 404
        res.end('<h1>Not found</h1>')
    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`listening on port http://localhost:${desiredPort}`)
})