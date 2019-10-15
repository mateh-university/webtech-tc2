const express = require('express')
const path = require('path')
const app = express()


app.use('/', express.static(path.resolve('views')))

app.listen(3000, ()=>console.log('Running on port 3000'))