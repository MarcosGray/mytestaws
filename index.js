require('dotenv/config')
const express = require('express')

const port = process.env.SERVER_PORT || 4000
const app = express()

app.get('/', (req, res) => {
    res.send('Olá Marcos Gray')
})

app.listen(port, err => {
    if (err) {
        console.log('Server not running...')
    } else {
        console.log('Server running at port: ' + port)
    }
})