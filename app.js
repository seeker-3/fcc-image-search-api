const log = console.log;
const url = process.env.MONGO_URI;
const col = process.env.COLLECTION;

import GoogleImageSearch from 'free-google-image-search'
const {MongoClient} = require('mongodb');
const express = require('express')
const app = express()

app.use(express.static('public'))
app.listen(process.env.PORT || 3000);

// GoogleImageSearch.searchImage("cats").then((res) => {
//     console.log(res);
// });

// MongoClient.connect(url, (err, client) => {
//   if (err) throw err;
//   client.close();
// });
