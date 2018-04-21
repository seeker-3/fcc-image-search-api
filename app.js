const url = process.env.MONGO_URI;
const col = process.env.COLLECTION;

const express = require('express')
const app = express()

app.use(express.static('public'))
app.listen(process.env.PORT || 3000);

