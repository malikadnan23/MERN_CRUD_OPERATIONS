const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const route = require('./routes/userRoutes')
const cors = require("cors")
dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(cors())

const PORT = process.env.PORT || 7000
const MONGO_URL = process.env.MONGO_URL
mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("database connected succeesfully")
        app.listen(PORT, () => {
        console.log(`app is running on PORT :${ PORT }`)
})
})
    .catch((err) => {
    console.log(err)
    })

app.use('/api',route)