const express = require('express')
const app = express()

const port = 3000
let randomLine = require('./choose_line')
var cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/random-line', (req, res) => {
    console.log("dupa")
    const chosenLine = req.query
    console.log(randomLine)
    res.send()
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})