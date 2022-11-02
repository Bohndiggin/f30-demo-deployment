const express = require('express');
const cors = require('cors');
require('dotenv').config()
const path = require('path');

const app = express()

app.use(express.json())
app.use(cors())

const {PORT} = process.env

app.listen(PORT, () => {console.log(`listening on ${PORT}`)})