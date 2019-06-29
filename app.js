require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.SERVER_PORT || 5000

const userRoute = require('./src/routes/users')

app.listen(port, () => {
    console.log(`cihuyy.... Port ${port} bosque`)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/', userRoute)