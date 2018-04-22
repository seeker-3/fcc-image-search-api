const log = console.log;
const url = process.env.MONGO_URI;
const col = process.env.COLLECTION;
const ID = process.env.CSE_ID;
const key = process.env.CSE_API_KEY;

const {MongoClient} = require('mongodb');
const GoogleImages = require('google-images');
const imageSearch = require('node-google-image-search');
const client = new GoogleImages(ID, key);
const express = require('express')
const app = express()

//app.use(express.static('public'))
app.listen(process.env.PORT || 3000);

// client.search('Steve Angello').then(images => {
//   log(images)
// });


// MongoClient.connect(url, (err, client) => {
//   if (err) throw err;
//   client.close();
// });
