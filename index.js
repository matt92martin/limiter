const path = require('path')
const express = require('express')
const cors = require('cors')

const file1 = path.resolve(__dirname, 'files', 'file1.js')
const file2 = path.resolve(__dirname, 'files', 'file2.js')
const indexFile = path.resolve(__dirname, 'index.html')

const app = express()
app.use(cors())

app.get('/test', (req, res) => {
    res.sendFile(indexFile)
})

app.get('*', (req, res) => {
    if (Math.random() < 0.5){
        res.sendFile(file1)
    } else {
        res.sendFile(file2)
    }
})


app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})
