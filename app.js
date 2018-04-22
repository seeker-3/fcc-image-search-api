const log = console.log;
const url = process.env.MONGO_URI;
const col = process.env.COLLECTION;
const ID = process.env.CSE_ID;
const key = process.env.API_KEY;


const {MongoClient} = require('mongodb');
const GoogleImages = require('google-images');
const express = require('express')
const app = express()

app.use(express.static('public'))
app.listen(process.env.PORT || 3000);


// MongoClient.connect(url, (err, client) => {
//   if (err) throw err;
//   client.close();
// });
