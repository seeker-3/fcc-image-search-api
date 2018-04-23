const log = console.log;
const url = process.env.MONGO_URI;
const col = process.env.COLLECTION;
const ID = process.env.ID;
const KEY = process.env.KEY;


const GoogleImages = require('google-images');
const client = new GoogleImages(ID, KEY);
const {MongoClient} = require('mongodb');
const express = require('express')
const app = express()

//client.search('cows').then(images => log(images));

app.listen(process.env.PORT || 3000);
//app.use(express.static('public'))
// MongoClient.connect(url, (err, client) => {
//   if (err) throw err;
//   client.close();
// });


