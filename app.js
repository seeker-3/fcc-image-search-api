const log = console.log;
const db_url = process.env.MONGO_URI;
const col = process.env.COLLECTION;
const ID = process.env.ID;
const KEY = process.env.KEY;

const url = require('url');


const GoogleImages = require('google-images');
const client = new GoogleImages(ID, KEY);
const {MongoClient} = require('mongodb');
const express = require('express')
const app = express()

//client.search('cows', {page: 40}).then(images => {});
//app.use(express.static('public'))
// MongoClient.connect(url, (err, client) => {
//   if (err) throw err;
//   client.close();
// });

app.listen(process.env.PORT || 3000);

app.get('/', (req, res) => res.end());

app.get('*', (req, res) => {
  const query = url.parse(req.url).pathname.slice(1);
  client.search(query, {page: req.query.offset || 1}).then(images => {
    log(query);
    res.json(images);
  });
});
